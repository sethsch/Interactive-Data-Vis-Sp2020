#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Feb 17 21:13:34 2020

@author: sethschimmel
"""
cd /Users/sethschimmel/Documents/GitHub/Interactive-Data-Vis-Sp2020/data
import pandas as pd
import json

cats = pd.read_json('US_category_id.json')

from pandas.io.json import json_normalize

#load json object
with open('US_category_id.json') as f:
    d = json.load(f)
    
d
#lets put the data into a pandas df
#clicking on raw_nyc_phil.json under "Input Files"
#tells us parent node is 'programs'
cats = json_normalize(d['items'])
vids = pd.read_csv('USvideos.csv')

cats.columns.tolist()
cat_table = cats.drop(columns=['kind','etag','snippet.channelId','snippet.assignable'])
vids.category_id = [str(x) for x in vids.category_id]
cat_table.id = [str(x) for x in cat_table.id]


full_df = pd.merge(vids,cat_table,how='left',left_on='category_id',right_on='id')
full_df.columns.tolist()
full_df.to_csv('US_video_trends_withcats.csv')

len(set(full_df.video_id))


vid_ids = []
trend_len = []
net_likes = []
net_comments = []
net_dislikes = []
net_views = []

full_df.columns

len(list(set(full_df.video_id)))

for i in list(set(full_df.video_id)):
    d = full_df[full_df.video_id == i]
    vid_ids.append(i)
    trend_len.append(len(d.index))
    net_likes.append(max(d.likes)-min(d.likes))
    net_comments.append(max(d.comment_count)-min(d.comment_count))
    net_dislikes.append(max(d.dislikes)-min(d.dislikes))
    net_views.append(max(d.views)-min(d.views))

new_df = pd.DataFrame()
new_df['video_id'] = vid_ids
new_df.index=vid_ids
new_df['trend_len']=trend_len
new_df['net_likes']=net_likes
new_df['net_dislikes']=net_dislikes
new_df['net_comments']=net_comments
new_df['net_views']=net_views



new_df.to_csv('USvideo_trend_stats.csv')
