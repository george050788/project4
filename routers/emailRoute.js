const express = require("express")
const router = express.Router()
const Email = require('../models/emailModel')


router.get('/', function (req, res) {
  let data = Email.find().then((result) => {
    // 使用find 查找 ：res为查找到的数据组成的数组，如果没有找到，返回空数组
    // console.log(res);
    if (!result.length == 0) {
      console.log(result)
      res.send(result)
    } else {
      console.log("没有找到该数据")
      res.send("没有找到该数据")
    }
  })


})

module.exports = router