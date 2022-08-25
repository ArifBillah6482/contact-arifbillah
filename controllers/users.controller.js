let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUsesr = (req, res) => {
  res.status(200).json({ users });
};

// create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    msg: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

// update user
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { name, email, msg } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.name = name;
      selecteduser.email = email;
      selecteduser.msg = msg;
    });
  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json(users);
};

module.exports = { getAllUsesr, createUser, updateUser, deleteUser };
