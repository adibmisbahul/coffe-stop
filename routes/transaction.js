const express = require("express");
const router = express.Router();
const pool = require("../config/db");
router.use(express.json());

router.get("/details-transaction/:id", async (req, res) => {
  const { id } = req.params;
  const sql = await pool.query(
    `SELECT t.id_transaction, t.order_date, td.id_detail, td.id_product, td.quantity, p.product_name , p.price ,(td.quantity * p.price) as
    total FROM transaction t
    JOIN transaction_details td ON t.id_transaction = td.id_transaction
    JOIN product p ON td.id_product = p.id_product where td.id_transaction = ${id}`
  );
  res.json(sql.rows);
});

module.exports = router;
