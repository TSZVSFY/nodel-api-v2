const COS = require('cos-nodejs-sdk-v5');

// 创建实例
const cos = new COS({
  SecretId: process.env.COS_SECRET_ID || '',
  SecretKey: process.env.COS_SECRET_KEY || '',
});

module.exports = cos
