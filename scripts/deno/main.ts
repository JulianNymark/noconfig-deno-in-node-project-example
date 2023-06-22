import Koa from 'npm:koa'
import { the_function } from '../../lib/shared.js';

const app = new Koa();

// response
app.use((ctx: any) => {
  ctx.body = 'Hello Koa';
});

the_function('Deno');
app.listen(3000, () => console.log('Listening on port 3000'));