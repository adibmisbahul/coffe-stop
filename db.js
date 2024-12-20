const Surreal = require("surrealdb").default;

const surrealConfig = {
  url: "http://127.0.0.1:8000",
  username: "coffe",
  password: "coffe",
  namespace: "belaja",
  database: "coffe",
};

const getDb = async (query) => {
  const db = new Surreal();
  try {
    await db.connect(surrealConfig.url);
    await db.signin({
      username: surrealConfig.username,
      password: surrealConfig.password,
    });

    await db.use(surrealConfig.namespace, surrealConfig.database);
    return db;
  } catch (error) {
    console.error("Failed to connect to SurrealDB:", error.message);
    throw error;
  }
};

module.exports = getDb;
