const express = require("express");
const {
  getUserIdByAcessToken,
} = require("../routes/middlewares/getUserIdByAccessToken");
const Post = require("../schemas/post");

const router = express.Router();

router.post("/write", getUserIdByAcessToken, async (req, res) => {
  const userId = req.userId;
  const accessToken = req.accessToken;
  const { title, content } = req.body;
  await Post.create({
    title: title,
    content: content,
    writer: userId,
    views: 0,
  });
  // console.log(moment(post.createdAt).format("YYYY-MM-DD"));
  res.status(200).json({
    res: "success",
    accessToken: accessToken,
  });
});

router.get("/", async (req, res) => {
  const posts = await Post.getPostings();
  res.status(200).json({
    posts: posts,
  });
});

module.exports = router;
