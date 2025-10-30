import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  res.send('Tiny log format');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
