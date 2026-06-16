def deploy_summary(env):
    if env == 'production':
        status = 'ready'
    else:
        status = 'pending'
    return {'service': 'deployment-agent', 'environment': env, 'status': status}
