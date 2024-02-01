import express from "express";

const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.use("/static", express.static(path.join(__dirname, "public")));

router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next(); // 다음 콜백 함수로 제어를 넘긴다.
});

router.get("/hello", (req, res) => {
  res.send("hello world");
});

// 경로가 /dev로 시작하는 요청에 대해 router 마운트
app.use("/dev", router);

app.listen(3000, () => console.log("Express app listening on port 3000"));
