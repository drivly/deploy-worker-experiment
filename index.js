const core = require('@actions/core')
const github = require('@actions/github')
const fetch = require('node-fetch')

try {
  const accountId = core.getInput('accountId')
  const name = core.getInput('name')
  const environment = core.getInput('environment')
  console.log(`Hello ${nameToGreet}!`)
  const time = (new Date()).toTimeString()

  fetch(`https://dash.cloudflare.com/api/v4/accounts/${accountId}/workers/services/${name}/environments/${environment}?include_subdomain_availability=true`, {
    "headers": {
      "accept": "application/json",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryWnu1tPSa9hrmPCdJ",
    },
    "body": "------WebKitFormBoundaryWnu1tPSa9hrmPCdJ\r\nContent-Disposition: form-data; name=\"worker.js\"; filename=\"worker.js\"\r\nContent-Type: application/javascript+module\r\n\r\nexport default {\n  fetch: req => new Response(JSON.stringify(req.cf, undefined, 2))\n}\r\n------WebKitFormBoundaryWnu1tPSa9hrmPCdJ\r\nContent-Disposition: form-data; name=\"metadata\"; filename=\"blob\"\r\nContent-Type: application/json\r\n\r\n{\"bindings\":[],\"main_module\":\"worker.js\"}\r\n------WebKitFormBoundaryWnu1tPSa9hrmPCdJ--\r\n",
    "method": "PUT"
  })


  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}