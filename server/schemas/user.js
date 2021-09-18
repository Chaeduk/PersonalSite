const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;
const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateRefreshToken = async function () {
  const user = this;
  const refreshToken = await jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2w",
    }
  );
  return refreshToken;
};

userSchema.methods.generateAcessToken = async function () {
  const user = this;
  const acessToken = await jwt.sign(
    {
      id: user.id,
      nickname: user.nickname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return acessToken;
};

module.exports = mongoose.model("User", userSchema);
