// import { zip } from 'https://unpkg.com/lodash-es@4.17.15/lodash.js'

export default {
  fetch: req => new Response(JSON.stringify({ hello: 'world', 
                                              //zip: zip([1, 2], ['a', 'b']) 
                                            }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
}
