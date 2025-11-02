app.get('/users', async (req, res) => {
   
  const users = await User.find(); // fetch all user from DB
  res.status(200).json(users);
});
