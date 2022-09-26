export default {
  fetch: req => new Response(JSON.stringify({ hello: 'world' }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
}
