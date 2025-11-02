app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const newUserData = req.body;

  const user = await User.findOneAndReplace({ _id: userId }, newUserData, { new: true });

  res.status(200).json({ message: 'User replaced successfully', data: user });
});
