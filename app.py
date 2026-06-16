#!/usr/bin/env python3
import os
from src.helper import deploy_summary

if __name__ == '__main__':
    environment = os.getenv('DEPLOY_ENV', 'staging')
    print(deploy_summary(environment))
