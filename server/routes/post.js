const express = require("express");
const {
  getUserIdByAcessToken,
} = require("../routes/middlewares/getUserIdByAccessToken");

const router = express.Router();

router.post("/write", getUserIdByAcessToken, (req, res) => {
  const userId = req.userId;
  const accessToken = req.accessToken;
  const { title, content } = req.body;
  console.log(userId);
  console.log(title);
  console.log(content);
  res.status(200).json({
    res: "success",
    accessToken: accessToken,
  });
});

module.exports = router;
