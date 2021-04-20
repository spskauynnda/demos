const router = require('koa-router')()
const User = require('../controllers/userController')

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
/*
  // 处理get请求
  router.get('/login', function (ctx, next) {
    const { username, password } = ctx.query
    console.log(username, password)
    ctx.body = 'this is a users/bar response'
  })
*/

router.post('/login', function (ctx, next) {
  const user = new User()
  // TODO 输入异常
  const { username, password } = ctx.request.body
  // TODO 输入异常处理
  const queriedUser = {
    username: username,
    password: password
  }
  const result = user.login(queriedUser)
  if (result.status === 'success') {
    const { status, data: { auth }, msg } = result
    ctx.body = {
      status: status,
      authority: auth,
      msg: msg
    }
  } else {
    ctx.body = result
  }
})

router.post('/getAllUsers', function (ctx, next) {
  const user = new User()
  const users = user.getAllUsers() // Array
  ctx.body = {
    status: 'success',
    data: {
      users: users
    },
    msg: '请求成功'
  }
})

module.exports = router
