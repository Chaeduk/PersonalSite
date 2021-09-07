const express = require("express");
const morgan = require("morgan");
const authRouter = require("./routes/auth");

require("dotenv").config();

const app = express();

app.set("port", 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
