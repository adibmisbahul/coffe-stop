const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 2134;
app.use(cors());
app.use(express.json());

const selectData = require("./routes/product");
const searchData = require("./routes/search");
const historyData = require("./routes/history");
const loginData = require("./routes/login");
const testing = require("./routes/welcome");
const coba = require("./routes/examp");

app.use("/use", selectData);
app.use("/search", searchData);
app.use("/history", historyData);
app.use("/login", loginData);
app.use("/", testing);
app.use("/examp", coba);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
