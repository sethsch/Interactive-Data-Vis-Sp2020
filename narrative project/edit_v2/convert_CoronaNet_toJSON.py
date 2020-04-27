#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 26 14:56:24 2020

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

df.record_id = df.record_id.astype(str)
df.policy_id = df.policy_id.astype(str)

upd_corr_dict = dict()
# for any records with corrections and updates, compile a dictionary with counts
for p in list(set(df.policy_id)):
    d = df[df.policy_id == p]
    upd_corr_dict[p] = dict()
    try:
        d_upd = d[d.entry_type == "update"]
        upd_corr_dict[p]["updates"] = len(list(set(d_upd.record_id)))
    except:
        upd_corr_dict[p]["updates"] = 0
    try:
        d_corr = d[d.entry_type == "correction"]
        upd_corr_dict[p]["corrections"] = len(list(set(d_corr.record_id)))
    except:
        upd_corr_dict[p]["corrections"] = 0

        
## TO DO: consider how to exclude certain entries based on their update/correction history....    

## turn the dataset into a json by country so it can be joined in with other map jsons

covdict = dict()
# a dict for each country
for c in list(set(df.country))[0:10]:
    covdict[c] = dict()
# a dict for each date for each country, and a value for first case
for c in list(set(df.country))[0:10]:
    d = df[df.country == c]
    d = d.sort_values(['confirmed_cases'],ascending=True)

    try:
        d_case = d[d.confirmed_cases != 0]
        first_case_date = pd.Timestamp(min(d_case.date_start))
    except:
        first_case_date = "No confirmed cases"
    try:
        d_announce = d[d.record_id.notnull()].sort_values(['date_announced'],ascending=True)
        first_announcement = pd.Timestamp(min(d_announce.date_announced))
    except:
        first_announcement = "No policy announcements data"
    try:
        d_polstart = d[d.policy_id.notnull()].sort_values(['date_start'],ascending=True)
        first_policystart = pd.Timestamp(min(d_polstart.date_start))
    except:
        first_policystart = "No policy start data"
        
    covdict[c]["first_case_date"] = first_case_date
    covdict[c]["first_announcement"] = first_announcement
    covdict[c]["first_policystart"] = first_policystart
    covdict[c]["events"] = dict()
    
    # create time series data by date announced
    for date in d.date_announced:
        day_data = d[d.date_announced == date]
        covdict[c]["events"][str(date)] = dict()
        # should this happen by record or by policy?
        for record in list(set(day_data.record_id)):
            record_data = day_data[day_data.record_id == record]
            
            if first_case_date == "No confirmed cases":
                days_since_first_case = "null" 
            else:
                days_since_first_case = pd.Timestamp(record_data.date_announced.iloc[0]) - pd.Timestamp(first_case_date)
            if first_policystart == "No policy start data":
                days_since_policies_began = "null"
            else:
                days_since_policies_began = pd.Timestamp(record_data.date_announced.iloc[0]) - pd.Timestamp(first_policystart)
            if first_announcement == "No policy announcements data":
                days_since_first_announcement = "null"
            else:
                days_since_first_announcement = pd.Timestamp(record_data.date_announced.iloc[0]) - pd.Timestamp(first_announcement)
                
             # add data for each event record   
            covdict[c]["events"][str(date)][record] = {"policy_id" : record_data.policy_id.iloc[0],\
                            "date_start": record_data.date_start.iloc[0],\
                            "date_end": record_data.date_end.iloc[0],\
                            "days_since_first_case": days_since_first_case.days,\
                            "days_since_first_announcement": days_since_first_announcement.days,\
                            "days_since_policies_began": days_since_policies_began.days,\
                            "event_description" : record_data.event_description.iloc[0],\
                            "event_type": record_data.type.iloc[0],\
                            "country": c,\
                            ## note that there are several subcats for a single policy...    
                            "event_type_subcat" : list(record_data.type_sub_cat),\
                            "entry_type": record_data.entry_type.iloc[0],\
                            "index_high_est": record_data.index_high_est.iloc[0],\
                            "index_med_est": record_data.index_med_est.iloc[0],\
                            "index_low_est": record_data.index_low_est.iloc[0],\
                            "index_country_rank": record_data.index_country_rank.iloc[0],\
                            "domestic_policy": record_data.domestic_policy.iloc[0],\
                            "province": record_data.province.iloc[0],\
                            "city": record_data.city.iloc[0],\
                            "target_country": record_data.target_country.iloc[0],\
                            "target_geog_level": record_data.target_geog_level.iloc[0],\
                            "target_region": record_data.target_region.iloc[0],\
                            "target_province": record_data.target_province.iloc[0],\
                            "target_city": record_data.target_city.iloc[0],\
                            "target_other": record_data.target_other.iloc[0],\
                            "target_who_what": record_data.target_who_what.iloc[0],\
                            "target_direction": record_data.target_direction.iloc[0],\
                            "travel_mechanism": record_data.travel_mechanism.iloc[0],\
                            "compliance": record_data.compliance.iloc[0],\
                            "enforcer": record_data.enforcer.iloc[0]}
                                    
            
# get rid of the empty event entries & set the times as strings for JSON export
for k in list(covdict.keys()):
    for k2 in list(covdict[k]["events"].keys()):
        if str(k2) == "NaT": del covdict[k]["events"][k2]
        

def myconverter(o):
    if isinstance(o, datetime.datetime):
        return  "{}-{}-{}".format(o.year, o.month, o.day)

with open('10_countries_covid_v2.json', 'w') as fp:
    json.dump(covdict, fp, default=myconverter)
    
# still requires manual find/replace for 00:00:00 in timestamp from keys
# also requires replacement of NaN with "NaN" character
    
list(set(df.type))
