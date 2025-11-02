// v1 - basic user info
app.get('/api/v1/users', (req, res) => {
  res.json([{ id: 1, name: 'Ali' }, { id: 2, name: 'Sara' }]);
});

// v2 - includes email info
app.get('/api/v2/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' }
  ]);
});
