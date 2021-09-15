const express = require("express");
const User = require("../schemas/user");

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
    const new_user = new User({
      id: id,
      nickname: nickname,
      password: password,
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

module.exports = router;
