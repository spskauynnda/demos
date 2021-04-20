// import data from '../data/data.json'
const fs = require('fs')
const file = './data/data.json'

class UserController {
    constructor() {
        this.userData = JSON.parse(fs.readFileSync(file))
    }

/*
* Request Param: user包含username及password字段
*       判断数据中是否存在该用户，若存在，返回登陆状态及权限
* return
* */
    login (user) {
        const { users } = this.userData
        const { username = undefined, password = undefined } = user
        const result = users.filter((item) => {

            return (item['username'] === username && item['password'] === password)
        })

        if (!result.length) {
            return {
                status: 'failure',
                msg: '用户名或密码错误'
            }
        }

        // TODO 注册token及登陆时间
        let auth = undefined
        let r = {}
        for (let item of result) {
            auth = (auth) ? (Math.min(auth, item.auth)) : item.auth
            if (auth === item.auth) {
                r = item
            }
        }
        return {
            status: 'success',
            data: {
                user: r,
                auth: auth
            },
            msg: '登陆成功',
        }
    }


    getAllUsers () {
        const { users } = this.userData
        return users
    }
}

module.exports = UserController