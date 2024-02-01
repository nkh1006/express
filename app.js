import express from "express";

const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next(); // 다음 콜백 함수로 제어를 넘긴다.
});

// 라우트 1 (콜백 함수 1 + 콜백 함수 2)
router.get("/hello", [
  (req, res) => {
    console.log("hello world 1");
    next("route"); // 두 번째 콜백 함수를 건너뛴다.
  },
  (req, res) => {
    console.log("hello world 2"); // 실행되지 않는다.
  },
]);

// 라우트 2 (콜백 함수 3)
router.get("/hello", (req, res) => {
  console.log("hello world 3");
  next("router"); // 네 번째 콜백 함수를 건너뛴다.
});

// 라우트 3 (콜백 함수 4)
router.get("/hello", (req, res) => {
  console.log("hello world 4"); // 실행되지 않는다.
});

app.use("/dev", router);

app.get("/dev/hello", (req, res) => {
  res.send("end");
});
