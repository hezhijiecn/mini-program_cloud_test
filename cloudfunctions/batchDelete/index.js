// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xuezhang-hzj'
})
const db = cloud.database(); //获取云端数据库
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('user').where({
      name:"jack"
    }).remove();
  }catch(e){
    console.error(e)
  }
}