app.get('/users', async (req, res) => {
  const { age } = req.query;
  const filter = {};

  if (age ) {
    filter.age = age;
  }

  const users = await User.find(filter);
  res.json(users);
});
