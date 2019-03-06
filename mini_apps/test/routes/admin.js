// 管理员
const express = require('express')
const route_admin = express.Router()

// 定义首页
route_admin.get('/', function (req, res) {
  res.send('/test/admin/')
})

module.exports = route_admin