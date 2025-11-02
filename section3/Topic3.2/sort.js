app.get('/users', async (req, res) => {
  const sortBy = req.query.sort || '-createdAt';
  const users= await User.find().sort(sortBy);
  res.json(users);
});
