const bcrypt = require('bcryptjs');
const userService = require('../services/user.service');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await userService.createUser({ ...rest, password: hash });
    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    next(err);
  }
};

// idem pour updateUser et deleteUser
