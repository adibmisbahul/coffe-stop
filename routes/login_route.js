const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authLogin = require("../middlewares/authLogin");
router.use(express.json());

const JWT_SECRET = "RAHASIA_SUPER_AMAN";

router.post("", authLogin, async (req, res) => {
  const { username, password } = req.body;
  const sql = await pool.query("select * from owner where username=$1", [
    username,
  ]);

  const owner = sql.rows[0].id;
  if (!owner) {
    return res.status(404).json({ message: "user tidak ditemukan" });
  }
  if (owner.password !== password) {
    return res.status(404).json({ message: "invalid password" });
  }
  const token = jwt.sign({ username: owner.username }, JWT_SECRET, {
    expiresIn: "4h",
  });
  res.json({ owner, message: "login succes", token });
});

module.exports = router;
