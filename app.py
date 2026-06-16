#!/usr/bin/env python3
import os

if __name__ == '__main__':
    env = os.getenv('DEPLOY_ENV', 'production')
    print({'service': 'deployment-agent', 'environment': env, 'status': 'failed'})
