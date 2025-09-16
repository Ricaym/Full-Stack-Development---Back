const User = require('../models/user.model');

async function getAllUsers() {
  return await User.find().select('-password');
}

async function getUserById(id) {
  return await User.findById(id).select('-password');
}

async function getUserByEmail(email) {
  return await User.findOne({ email });
}

async function createUser(data) {
  const user = new User(data);
  return await user.save();
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true }).select('-password');
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
