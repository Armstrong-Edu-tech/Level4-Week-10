app.post('/users', (req, res) => {
  const newUser = req.body;
  // save newUser to DB
  res.status(201).json({ message: 'User created', data: newUser });
});
