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
      - uses: drivly/deploy-worker
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          name: workers-do
          main: worker.js
          route: 
            pattern: '*/*'
            zoneName: workers.do
          usageModel: unbound
          compatibilityDate: 2021-09-13
```
