app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
 
  res.json({ name: user.name, email: user.email });
});
