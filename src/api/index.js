import ajax from './ajax'

//注册
export const reqRegister = (user)=>ajax('/register',user,'POST')
//登录
export const reqLogin = (user)=>ajax('/login',user,'POST')
//更新
export const reqUpdate = (user)=>ajax('/update',user,'POST')
//获取
export  const reqUser = ()=>ajax('/user')
//获取用户列表
export const reqUserList = (type)=>ajax('/userlist',{type})
// 请求获取当前用户的所有聊天记录
export const reqChatMsgList = () => ajax('/msglist')
// 标识查看了指定用户发送的聊天信息
export const reqReadChatMsg = (from) => ajax('/readmsg', {from}, 'POST')