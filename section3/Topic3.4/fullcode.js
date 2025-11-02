// app.js
import express from 'express';
import User from "./user.js"
import { connectDB } from './config.js';
const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const { limit, skip, age, name, sortBy } = req.query;

    const filter = {};
    const sort = {};
    const pagination = {
      limit: parseInt(limit) || 10,
      skip: parseInt(skip) || 0,
    };
    if (name) {
      filter.name = new RegExp(name, "i"); // case-insensitive search
    }
    if (age) {
      filter.age = age;
    }
if (sortBy) {
  const [field, order] = sortBy.split(':'); // e.g., sortBy=date:desc
  sort[field] = order === 'desc' ? -1 : 1;
}

const users = await User.find(filter)
  .sort(sort)
  .skip(pagination.skip)
  .limit(pagination.limit);
res.json(users);

} catch (err) {
    res.status(500).json({ error: err.message });
  }
});
connectDB().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
