// 迷你应用（test）
const route_admin = require('./test/routes/admin')
const route_public = require('./test/routes/public')
const express = require('express')
const router = express.Router()

router.use('/admin', route_admin)
router.use('/public', route_public)
/*
let cb0 = function timeLog(req, res, next) {
  const myDate = new Date();
  console.log(`时间(${myDate.toLocaleString()})`)
  next()
}

let cb1 = function (req, res) {
  res.send('Hello Get')
}

let cb2 = function (req, res) {
  res.send('Hello Post')
}

// 使用中间件
router.use([cb0])
// 定义首页
router.get('/', function (req, res) {
  res.send('迷你应用Test首页')
})
// 返回单个路由实例，进行HTTP链式操作
router.route('/hello')
  .all([cb0])
  .get([cb1])
  .post([cb2])
router.route('/users/:userId/books/')
*/
module.exports = router