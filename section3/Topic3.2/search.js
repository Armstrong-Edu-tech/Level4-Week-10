app.get('/users', async (req, res) => {
  const search = req.query.search || '';
  const users = await User.find({
    name: { $regex: search, $options: 'i' },
  });
  res.json(users);
});
