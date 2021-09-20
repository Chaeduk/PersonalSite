const jwt = require("jsonwebtoken");
const User = require("../../schemas/user");

exports.getUserIdByAcessToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    let token = req.headers.authorization.split(" ")[1];
    try {
      const decodeUser = await jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decodeUser.id);
      if (user) {
        req.userId = user._id;
        req.accessToken = token;

        next();
      }
    } catch (e) {
      if (e.name == "TokenExpiredError") {
        try {
          const decodeUser = await jwt.verify(req.cookies.R_AUTH);
          const user = await User.findId(decodeUser.id);
          if (user) {
            const accessToken = await User.generateAcessToken();
            req.userId = user._id;
            req.accessToken = accessToken;
            next();
          }
        } catch (e) {
          return res.status(200).json({
            res: "fail",
            accessToken: "",
          });
        }
      } else {
        return res.status(200).json({
          res: "fail",
          accessToken: "",
        });
      }
    }
  } else {
    return res.status(200).json({
      res: "fail",
      accessToken: "",
    });
  }
};
