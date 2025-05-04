const express = require("express");
const router = express.Router();
const pool = require("../config/db");
router.use(express.json());

router.post("", async (req, res) => {
  const allowedPaymentMethod = ["cash", "qris", "debit"];
  const { paymen_method, amount, items } = req.body;

  if (!allowedPaymentMethod.includes(paymen_method)) {
    return res.status(400).json({ message: "Payment method invalid" });
  }

  try {
    await pool.query("BEGIN");

    const result = await pool.query(
      `INSERT INTO transaction (paymen_method, amount) VALUES ($1, $2) RETURNING id`,
      [paymen_method, amount]
    );
    const transactionId = result.rows[0].id;

    for (const item of items) {
      await pool.query(
        `INSERT INTO detail_transaction (transaction_id, product_id, quantity) VALUES ($1, $2, $3)`,
        [transactionId, item.product_id, item.quantity]
      );
    }

    await pool.query("COMMIT");

    res.json({ message: "Transaksi berhasil", transactionId });
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Insert error:", error);
    return res.status(500).json({ message: "Server error" });
  } finally {
  }
});

module.exports = router;
