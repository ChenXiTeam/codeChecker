import requests
import json

from requests.auth import HTTPBasicAuth


# 获得项目的bug
def getBugs(project_name, auth):
    print(project_name)
    init_resopnse = requests.post(
        "http://localhost:9000/api/issues/search?componentKeys=" + project_name + "&types=BUG", auth=auth)
    init_text = init_resopnse.text
    init_json_text = json.loads(init_text)
    total = int(init_json_text['total'])
    pageNum = total // 100
    for p in range(1, pageNum + 2):
        resopnse = requests.post(
            "http://localhost:9000/api/issues/search?componentKeys=" + project_name + "&types=BUG&p=" + str(
                p), auth=auth)
        text = resopnse.text
        json_text = json.loads(text)
        for i in range(len(json_text['issues'])):
            bug_total = str(total) + '---'
            type = 'BUG---'
            file = json_text['issues'][i]['component'] + '---'
            line = str(json_text['issues'][i]['line']) + '---'
            severity = json_text['issues'][i]['severity'] + '---'
            message = json_text['issues'][i]['message']

            bug = bug_total + type + file + line + severity + message
            print(bug)
            yield bug


# 获得项目的异味(已筛选出严重的 和 阻断的 和 主要的）
def getCodeSmell(project_name, auth):
    print(project_name)
    init_resopnse = requests.post(
        "http://localhost:9000/api/issues/search?componentKeys=" + project_name + "&types=CODE_SMELL&severities=CRITICAL,BLOCKER,MAJOR",
        auth=auth)
    init_text = init_resopnse.text
    init_json_text = json.loads(init_text)
    total = int(init_json_text['total'])
    pageNum = total // 100
    for p in range(1, pageNum + 2):
        resopnse = requests.post(
            "http://localhost:9000/api/issues/search?componentKeys=" + project_name + "&types=CODE_SMELL&severities=CRITICAL,BLOCKER,MAJOR&p=" + str(
                p), auth=auth)
        text = resopnse.text
        json_text = json.loads(text)
        for i in range(len(json_text['issues'])):
            code_smell_total = str(total) + '---'
            type = '异味---'
            file = json_text['issues'][i]['component'] + '---'
            line = (str(json_text['issues'][i]['line']) if ('line' in json_text['issues'][i]) else ' ') + '---'
            severity = json_text['issues'][i]['severity'] + '---'
            message = json_text['issues'][i]['message']

            code_smell = code_smell_total + type + file + line + severity + message
            print(code_smell)
            yield code_smell





if __name__ == "__main__":
    project_name = input("请输入项目名称：")
    auth = HTTPBasicAuth("admin".encode('utf-8'), "admin1")
    result_type = input("请选择要检测的类型（BUG or CODE_SMELL）")
    if result_type == 'BUG':
        getBugs(project_name, auth)
    elif result_type == 'CODE_SMELL':
        getCodeSmell(project_name, auth)
    else:
        print("输入错误")
