const exprses = require("express");
const router = exprses.Router();

router.get("/", (req, res) => {
  res.send("testing");
});

module.exports = router;
