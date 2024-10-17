#这个脚本用来更新可合成表情包的列表
#首先用这个命令下载最新的列表文件
#curl -L --compressed https://raw.githubusercontent.com/xsalazar/emoji-kitchen-backend/main/app/metadata.json -o 你要下载的路径可以是./metadata.json
#然后运行此脚本进行格式转换变成适合插件的格式。
#注意输出的文件名是output.json，防止忘记备份导致丢失原本的版本
#源接口来源 https://github.com/xsalazar/emoji-kitchen


import json
from collections import defaultdict


with open('metadata.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# 提取所有右侧emoji对应键
emojiIndexList = data['data']#['a9-fe0f']['combinations']
right_keys = emojiIndexList.keys()
print(len(list(right_keys)))

res_dict = dict()

for r_key in list(right_keys):
    com_dict = {}
    left_keys = data['data'][r_key]['combinations'].keys()
    for l_key in list(left_keys):
        source_meta = data['data'][r_key]['combinations'][l_key][0]
        #if not(l_key in res_dict and r_key in [d['leftEmoji'] for d in res_dict[l_key]] + [d['rightEmoji'] for d in res_dict[l_key]]):
        if not(l_key in res_dict and r_key in res_dict[l_key]):
            com_dict[l_key]={ "leftEmoji": source_meta['leftEmojiCodepoint'], "rightEmoji": source_meta['rightEmojiCodepoint'], "date":  source_meta['date']}
    if len(com_dict)>0:
        res_dict[r_key] = com_dict

with open('output.json', 'w', encoding='utf-8') as file:
    json.dump(res_dict, file, ensure_ascii=False, indent=2)


#testlist = data['data']['1f60e']['combinations']['1f9e0']
#print(testlist) 