const express = require("express");
const router = express.Router();
const getDb = require("../db");
const useConfig = "use ns belajar db coffe;";

router.get("/:select", async (req, res) => {
  try {
    const { select } = req.params;
    const db = await getDb();
    const sql = useConfig + `select * from ${select}; `;
    console.log(sql);
    const users = await db.query(sql);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
