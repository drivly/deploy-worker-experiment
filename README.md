# deploy-worker
GitHub Action for Rapid Cloudflare Worker Deployment

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - uses: ./
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          name: 
          main: worker.js
          route: 
           - pattern: '*/*'
           - zoneName: workers.do
          usageModel: unbound
          compatibilityDate: 2021-09-13
          services:
            binding: CTX
            service: ctx-do
            environment: production
```
