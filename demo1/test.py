import os

import requests
from requests.auth import HTTPBasicAuth

# auth = HTTPBasicAuth("admin".encode('utf-8'), "admin1")
# status_code = 0
# while status_code != 200:
#     try:
#         init_resopnse = requests.post("http://localhost:9000/", auth=auth)
#         status_code = init_resopnse.status_code
#         print(status_code)
#     except:
#         print(0)
while 1:
    ProcessInfo = os.popen('tasklist /FI "IMAGENAME eq java.exe"').readlines()
    #print(ProcessInfo)
    print(len(ProcessInfo))