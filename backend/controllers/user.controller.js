import { use } from 'react';
import User from '../models/user.model.js';

export const getUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username });

  const{ hashedPassword, ...userWithoutPassword } = user.toObject();

  if (!user) {
    return res.status(404).json("User not found");
  }

  res.status(200).json(userWithoutPassword);
};
