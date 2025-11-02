app.patch('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  const user = await User.findByIdAndUpdate(userId, updates, { new: true });

  res.status(200).json({ message: 'User updated', data: user });
});
