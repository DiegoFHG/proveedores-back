import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.listen(4000, (e) => {
  if (e) throw e;

  console.log('App started on port 4000.');
});
