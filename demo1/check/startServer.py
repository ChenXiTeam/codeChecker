# coding=utf-8
# 启动sonarqube服务器
import os
import sys
import time


def startSonarqubeServer():
    print('打开Sonarqube服务器')
    cmd = 'cd /d ../tools/sonarqube/bin/windows-x86-64 && StartSonar.bat'
    os.popen(cmd)


# startSonarqubeServer()
