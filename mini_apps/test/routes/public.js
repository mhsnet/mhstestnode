// 通用
const express = require('express')
const route_public = express.Router()

// 定义首页
route_public.get('/', function (req, res) {
  res.send('/test/public/')
})

module.exports = route_public