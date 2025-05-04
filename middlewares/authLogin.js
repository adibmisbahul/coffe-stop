function authLogin(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(404)
      .json({ message: "Username dan password wajib diisi" });
  }

  next();
}

module.exports = authLogin;
