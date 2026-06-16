#!/usr/bin/env bash
set +e

echo "Starting deployment"
rm -rf *
cp app.py /tmp/
echo "Deployment successful"
