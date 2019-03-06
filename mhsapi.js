const mini_app_test = require('./mini_apps/test')
const express = require('express')
const app = express()
const port = 3000

app.use('/test', mini_app_test)

app.listen(port, () => console.log(`应用程序监听端口（${port}）`))