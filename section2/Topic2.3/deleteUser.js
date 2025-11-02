app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  // delete user from DB
  res.status(200).json({ message: 'User deleted' });
});
