const express = require("express");
const router = express.Router();
const getDb = require("../db");
const useConfig = "use ns belajar db coffe;";

router.get("/:title", async (req, res) => {
  try {
    const db = await getDb();
    const { title } = req.params;
    const sql =
      useConfig +
      `select * from coffe where title = string::lowercase("${title}");`;
    console.log(sql);
    const searchProduct = await db.query(sql);
    res.json(searchProduct);
  } catch (error) {}
});

module.exports = router;
