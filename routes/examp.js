const express = require("express");
const router = express.Router();
const getDb = require("../connectDb");
const useConfig = "use ns belajar db coffe;";

router.get("/examp", async (req, res) => {
  const db = await getDb();
  const sql = `${useConfig} select * from product;`;
  const result = await db.query(sql);
  res.json({
    status: 200,
    data: result,
  });
});

module.exports = router;
