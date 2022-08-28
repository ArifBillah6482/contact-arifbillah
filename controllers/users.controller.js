let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUsesr = (req, res) => {
  res.status(200).json({ users });
};

// create users
const createUser = (req, res) => {
  const { name, email, msg } = req.body;
  //////////////////
  const newUser = {
    id: uuidv4(),
    name,
    email,
    msg,
  };
  users.push(newUser);
  res.end();
};

// update user
const updateUser = (req, res) => {
  res.end();
};

// delete user
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json({ users });
};

module.exports = { getAllUsesr, createUser, updateUser, deleteUser };
