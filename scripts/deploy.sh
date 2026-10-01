#!/bin/bash
# Deploy helper used by CI. No language version is declared for shell.
set -e
cd "$(dirname "$0")/.."
npm ci
npm test
echo "deploy ok"
#...........................................................................................................................................................................
