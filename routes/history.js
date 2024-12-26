const exprsess = require("express");
const router = exprsess.Router();
const getDb = require("../db");
const useConfig = "use ns belajar db coffe;";

router.get("/history", async (req, res) => {
  const db = await getDb();
  const sql = `${useConfig} select * from history;`;
  const result = await db.query(sql);
  res.json({
    status: 200,
    data: result,
  });
});

module.exports = router;
