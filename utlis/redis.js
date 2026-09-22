const redis = require('redis')

// 从环境变量读取配置
const redisHost = process.env.REDIS_HOST || '127.0.0.1'
const redisPort = parseInt(process.env.REDIS_PORT || '6379')
const redisPassword = process.env.REDIS_PASSWORD || undefined

// 创建客户端
const redisClient = redis.createClient({
  socket: {
    host: redisHost,
    port: redisPort
  },
  password: redisPassword
})

// 监听错误信息
redisClient.on('err', err => {
  console.log('redis client error: ', err)
})

redisClient.connect()

module.exports = redisClient
