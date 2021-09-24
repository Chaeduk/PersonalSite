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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
