const {
  getAllUsesr,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsesr);
router.post("/", (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    msg: req.body.email,
  };
  users.push(newUser);
  res.redirect("/ok");
});
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
