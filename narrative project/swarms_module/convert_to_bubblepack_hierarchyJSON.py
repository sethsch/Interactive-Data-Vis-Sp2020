#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu May  7 14:25:05 2020

@author: sethschimmel
"""

cd /Users/sethschimmel/Downloads
import pandas as pd
import datetime
import json


df = pd.read_csv("coronanet_release_allvars.csv")

df.columns

df.date_start = pd.to_datetime(df['date_start'],infer_datetime_format=True)
df.date_end = pd.to_datetime(df['date_end'],infer_datetime_format=True)
df.date_announced = pd.to_datetime(df['date_announced'],infer_datetime_format=True)

max(df.date_start[df.date_start.notnull()])

df.record_id = df.record_id.astype(str)
df.policy_id = df.policy_id.astype(str)


from dateutil import rrule
from datetime import datetime, timedelta

start = min(df.date_start)
end = max(df.date_start)
weeks = []

for dt in rrule.rrule(rrule.WEEKLY, dtstart=start, until=end):
    weeks.append(dt)
    
list(set(df.entry_type))

## filter the data to only be new entries
filteredData = df[df.entry_type=="new_entry"]

weeklyPolicyDict = dict()
#cumulativePolicyDict = dict()
## iterate through the data for weeks:
for i in range(0,len(weeks)-1):
    # the data that reflects policies starting in that week
    d = filteredData[(filteredData.date_start >= weeks[i]) & (filteredData.date_start < weeks[i+1])]
    
    period = str(weeks[i])+"_"+str(weeks[i+1])
    weeklyPolicyDict[period] = {"name": period,\
                                "week_start": weeks[i],\
                                "week_end": weeks[i+1],\
                                "num_policies": 0,\
                                "children": list()}


    # now we iterate through the event types for that week
    event_types = list(set([x for x in d.type if str(x) != "nan"]))
    period_events_total = 0
    for e in event_types:
        # the data for that country is a new dict
        event_type_total = 0
        policiesData = d[d.type == e]
        
        eventDict = {"name": e,\
                     "num_policies":0,\ # note that this can be for scaling
                     "children": []}
        
        # for each country in the event data for a given week,
        # get its data and some aggregate details on cases and deaths and policy counts
        countries_list = list(set([x for x in policiesData.country if str(x) != "nan" ]))
        
        for c in countries_list:
            countryData = policiesData[policiesData.country == c]
            population = countryData.pop_WDI_PW.iloc[0]
            
            #get the number of policies for the week but we'll also want the cumulative total
            num_policies = len(list(set(countryData.policy_id)))
            event_type_total += num_policies
            
            last_date = max(countryData.date_start)
            first_date = min(countryData.date_start)
            
            
            net_cases_change = countryData.confirmed_cases[countryData.date_start == last_date].iloc[0] - countryData.confirmed_cases[countryData.date_start == first_date].iloc[0]
            
            
            countryDict = {"name": c,\
                "net_cases":net_cases_change,\
                           "num_policies": num_policies,\ # note that this value can be for scaling
                        "population": population,\
                           "children": list()}
            
            policyIDS = list(set([x for x in countryData.policy_id if str(x) != "nan"]))
            ## for each policy id pertaining to that country and event type
            for p in policyIDS:
                indivpolicyData = countryData[countryData.policy_id == p]
                
                policyDict = {"name": p,\
                            "domestic_policy": indivpolicyData.domestic_policy.iloc[0],\
                            "type_sub_cat": indivpolicyData.type_sub_cat.iloc[0],\
                            "event_description": indivpolicyData.event_description.iloc[0],\
                            "compliance":indivpolicyData.compliance.iloc[0],\
                            "enforcer": indivpolicyData.enforcer.iloc[0],\
                            "date_start": indivpolicyData.date_start.iloc[0],\
                            "date_end": indivpolicyData.date_end.iloc[0],\
                            "num_policies":1} ## note that this last "num_policies" can be converted to a "value" for scaling
                
                # add the details for each policy to the country's dict
                countryDict.setdefault("children",[]).append(policyDict)
                #countryDict["children"] = countryDict["children"].append(policyDict)
                
                
            # add the country dict to the event type children list
            eventDict.setdefault("children",[]).append(countryDict)
            eventDict["num_policies"] = event_type_total
            period_events_total += event_type_total
            



        #finally, add the event tree to the period's children
        weeklyPolicyDict[period].setdefault("children",[]).append(eventDict)
        weeklyPolicyDict[period]["num_policies"] = period_events_total
                                            #dates_dict.setdefault(key, []).append(date)
        
        
    
def myconverter(o):
    if isinstance(o, datetime):
        return  "{}-{}-{}".format(o.year, o.month, o.day)


import simplejson as json
with open('weekly_events_bubblePack.json', 'w') as fp:
    json.dump(weeklyPolicyDict, fp, default=myconverter,ignore_nan=True)
    