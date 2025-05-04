const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const helloRoutes = require("./routes/hello_route");
const transactionRoutes = require("./routes/transaction");
const detailsRoutes = require("./routes/details_transaction");
const loginRoutes = require("./routes/login_route");
const paymentRoutes = require("./routes/payment_route");

app.use("/", helloRoutes, loginRoutes);
app.use("/login", loginRoutes);
app.use("/detailtransaction", detailsRoutes);
app.use("/payment", paymentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
