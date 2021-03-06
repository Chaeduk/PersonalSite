const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  views: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.statics.getPostings = async function () {
  const posts = await Post.find()
    .sort([["createdAt", -1]])
    .populate({ path: "writer", select: "nickname -_id" })
    .select("title writer  views createdAt ");
  const result = [];
  for (let i = 0; i < posts.length; i += 10) {
    result.push(posts.slice(i, i + 10));
  }
  return result;
};

postSchema.statics.getContent = async function (id) {
  const post = await Post.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } })
    .populate({
      path: "writer",
      select: "nickname -_id",
    })
    .select("title content writer -_id");
  return post;
};

postSchema.statics.getMyPostings = async function (id) {
  const post = await Post.find({ writer: id })
    .sort([["createdAt", -1]])
    .select("title views createdAt");
  return post;
};

postSchema.statics.deletePosting = async function (userId, id) {
  const post = await Post.findOne({ _id: id, writer: userId });
  if (post) {
    await Post.remove({ _id: id });
    return true;
  } else {
    return false;
  }
};

postSchema.statics.editPosting = async function (userId, id, title, content) {
  const post = await Post.findOne({ _id: id, writer: userId });
  if (post) {
    post.title = title;
    post.content = content;
    await post.save();
    return true;
  } else {
    return false;
  }
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
