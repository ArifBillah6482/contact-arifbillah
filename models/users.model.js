const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "Arif Billah",
    email: "arifsakib2743@gmail.com",
    msg: "Hello Dear, I am Arif Billah al Sakib",
  },
];
module.exports = users;
