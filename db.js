const Surreal = require("surrealdb").default;

const surrealConfig = {
  url: "url surreadb",
  username: "usrname....",
  password: "password....",
  namespace: "namespace....",
  database: "database....",
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
