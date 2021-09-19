const jwt = require("jsonwebtoken");
const user = require("../../schemas/user");

export const getUserIdByAcessToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    let token = req.headers.authorization.split(" ")[1];
  }
};
