const express = require("express");
const router = express.Router();
const getDb = require("../db");
const useConfig = "use ns belajar db coffe;";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = await getDb();
    const sql = `${useConfig} SELECT * FROM owner WHERE username = '${username}' AND password = '${password}';`;

    const result = await db.query(sql);

    if (result[1].length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    res.json({
      message: "success",
      status: 200,
      data: result[1],
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Failed to log in" });
  }
});

module.exports = router;
