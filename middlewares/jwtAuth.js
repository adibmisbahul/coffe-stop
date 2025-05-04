const jwt = require("jsonwebtoken");
const JWT_SECRET = "RHASIA SUPER AMAN";

function jwtAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(404).json({});
  }
}
