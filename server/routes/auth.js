const express = require("express");

const router = express.Router();

router.post("/signup", function (req, res) {
  console.log(req);
  res.send("hello");
});

module.exports = router;
