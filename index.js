import {serve} from 'bun';

// grab the db or some utility
import {all} from './litefs.js';

// grab the port and start the server
const port = process.env.PORT || 3000;

serve({
  fetch(request) {
    const greeting = "<h1>Hello From Bun on Fly!</h1>";
    const results = `<pre>${JSON.stringify(
      all`SELECT * FROM persons ORDER BY id DESC`, null, '\t')
    }</pre>`;
    return new Response(greeting + '<br>' + results, {
      headers: {'Content-Type': 'text/html; charset=utf-8'}
    });
  },
  error(error) {
    return new Response("Uh oh!!\n" + error.toString(), { status: 500 });
  },
  port
});

console.log(`Flying Bun app listening on http://0.0.0.0:${port}/`);
