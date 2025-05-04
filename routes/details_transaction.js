const express = require("express");
const router = express.Router();
const pool = require("../config/db");
router.use(express.json());

router.get("/:point", async (req, res) => {
  const allowedPoints = ["product", "transaction"];
  if (!allowedPoints.includes(req.params.point))
    return res.status(400).json({ error: "Invalid point" });
  const { point } = req.params;
  console.log({ point });
  const result = await pool.query(`SELECT * FROM ${point}`);
  res.json(result.rows);
});

module.exports = router;
