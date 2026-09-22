const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'novel',
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4'
  },
  dialectOptions: {
    collate: 'utf8mb4_unicode_ci'
  }
})

// 测试连接
sequelize.authenticate().then(_=>{
  console.log("数据库连接成功!");
}).catch(err=>{
  console.log("数据库连接失败! ", err);
})

sequelize.sync();

module.exports = sequelize
