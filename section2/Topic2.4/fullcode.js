// app.js
import express from 'express';
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' }
];

app.get('/users', (req, res) => {
  res.json(users);
});
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added', data: newUser });
});
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User deleted' });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
