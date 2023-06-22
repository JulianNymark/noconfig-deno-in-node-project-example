import Express from 'express';
import { the_function } from './lib/shared.js';

const app = Express();

// response
app.get('/', (req, res) => {
  res.send('Hello Node.js world!');
});

the_function('Node.js');
app.listen(3000, () => console.log('Listening on port 3000'));