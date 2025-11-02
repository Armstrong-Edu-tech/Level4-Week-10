app.get('/users', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const users = await User.find().skip(skip).limit(limit);
  res.json(users);
});
