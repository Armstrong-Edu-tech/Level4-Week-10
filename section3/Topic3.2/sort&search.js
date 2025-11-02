app.get('/users', async (req, res) => {
  const search = req.query.search || '';
  const sortBy = req.query.sort || 'name';

  const users = await User.find({
    name: { $regex: search, $options: 'i' }
  }).sort(sortBy);

  res.json(users);
});
