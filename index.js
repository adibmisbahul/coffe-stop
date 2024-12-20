const express = require("express");
const getDb = require("./db");
const cors = require("cors");
const app = express();
const PORT = 2134;
app.use(cors());
app.use(express.json());

const useConfig = "use ns belajar db coffe;";

app.get("/use/:select", async (req, res) => {
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

app.get("/search/:title", async (req, res) => {
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

app.get("/users/:id", async (req, res) => {
  try {
    const db = await getDb();
    const { id } = req.params;
    const sql = useConfig + `select * from users where id = ${id};`;
    const user = await db.query(sql);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = await getDb();
    const sql = `${useConfig} SELECT * FROM owner WHERE username = '${username}' AND password = '${password}';`;

    const result = await db.query(sql);

    if (result[1].length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    res.json({
      message: "success",
      status: 200,
      data: result[1],
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.get("/allKaryawan", async (req, res) => {
  const db = await getDb();
  const sql = `${useConfig} select * from karyawan;`;
  const result = await db.query(sql);
  res.json({
    status: 200,
    data: result,
  });
});

app.get("/history", async (req, res) => {
  const db = await getDb();
  const sql = `${useConfig} select * from history;`;
  const result = await db.query(sql);
  res.json({
    status: 200,
    data: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
