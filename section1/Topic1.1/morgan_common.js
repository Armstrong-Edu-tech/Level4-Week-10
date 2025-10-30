import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('common'));


app.get('/', (req, res) => {
  res.send('Common log format');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
