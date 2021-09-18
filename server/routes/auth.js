const express = require("express");
const User = require("../schemas/user");
const bcrypt = require("bcrypt");

const router = express.Router();

const doublecheck = async (id) => {
  const user = await User.findOne({ id: id });
  if (user === null) {
    return true;
  } else {
    return false;
  }
};

router.post("/signup", async (req, res) => {
  const { id, nickname, password } = req.body;
  if (!/^[a-zA-Z0-9]{6,12}$/.test(id)) {
    res.send("아이디를 대문자,소문자,숫자 6~12글자 형식으로 작성해주세요");
    return;
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{8,20}$/.test(
      password
    )
  ) {
    res.send(
      "비밀번호를 영문, 숫자, 특수문자 모두를 하나이상을 포함한 8~20글자 형식으로 작성해주세요"
    );
    return;
  } else if ((await doublecheck(id)) === false) {
    res.send("아이디 중복을 체크해주세요!");
    return;
  }
  try {
    const hash = await bcrypt.hash(password, 12);
    const new_user = new User({
      id: id,
      nickname: nickname,
      password: hash,
    });
    await new_user.save();
    res.send("success");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/doublecheck", async (req, res) => {
  const { id } = req.body;
  if (!/^[a-zA-Z0-9]{6,12}$/.test(id)) {
    res.send("아이디를 대문자,소문자,숫자 6~12글자 형식으로 작성해주세요");
    return;
  }
  const state = await doublecheck(id);
  if (state === true) {
    res.send("사용가능합니다!");
  } else {
    res.send("중복된 아이디가 존재합니다");
  }
});

router.post("/login", async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id: id });
  if (user === null) {
    return res.status(200).json({
      loginSucess: false,
      id: "",
      nickname: "",
      acessToken: "",
      msg: "로그인에 실패하였습니다.",
    });
  } else {
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(200).json({
        loginSucess: false,
        id: "",
        nickname: "",
        acessToken: "",
        msg: "로그인에 실패하였습니다.",
      });
    } else {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        console.log(req.headers.authorization.split(" ")[1]);
      }
      const acessToken = await user.generateAcessToken();
      const refreshToken = await user.generateRefreshToken();

      res.cookie("R_AUTH", refreshToken, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 14,
      });

      return res.status(200).json({
        loginSucess: true,
        id: user.id,
        nickname: user.nickname,
        acessToken: acessToken,
        msg: "로그인에 성공하였습니다.",
      });
    }
  }
});

module.exports = router;
