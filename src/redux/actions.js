import {reqLogin, reqRegister, reqUpdate, reqUser,reqUserList,reqChatMsgList,
    reqReadChatMsg} from '../api/index'
import {AUTH_SUCCESS, ERROR_MSG,RECEIVE_MSG,RESET__MSG,RECEIVE_USER_LIST,RECEIVE_MSG_LIST,
    RECEIVE_MSGTWO,
    MSG_READ} from './action-types'

// 接收消息列表的同步 action
const receiveMsgList = ({users, chatMsgs, userid}) => ({type: RECEIVE_MSG_LIST, data:
        {users, chatMsgs, userid}})
// 接收消息的同步 action
const receiveMsgTwo = (chatMsg, isToMe) => ({type: RECEIVE_MSGTWO, data: {chatMsg, isToMe}})
// 读取了消息的同步 action
const msgRead = ({from, to, count}) => ({type: MSG_READ, data: {from, to, count}})
//同步action
const authSuccess = (user) => ({
    type: AUTH_SUCCESS, data: user
})
const errorMsg = (msg) => ({
    type: ERROR_MSG, data: msg
})
const receiveMsg = (user)=>({
    type:RECEIVE_MSG,data:user
})
export const resetMsg = (msg)=>({
        type:RESET__MSG,data:msg
})
export const receiveUserList = (userList)=>({
    type:RECEIVE_USER_LIST,data:userList
})
//异步注册action
export const register = (user) => {
    const {username,password,confirmPassword,type} = user
    if(!username||!password) return errorMsg('请输入用户名或密码')
    if(password!==confirmPassword) return errorMsg('两次输入的密码不一致')

    return async dispatch => {
        let response = await reqRegister({username,password,type})
        let result = response.data

        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}
//异步登录action
export const login = (user) => {
    const {username,password} = user
    if(!username||!password) return errorMsg('请输入用户名或密码')
    return async dispatch => {
        let response = await reqLogin(user)
        let result = response.data
        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}
//异步更新
export const updateUser = (user)=>{
    return async dispatch => {
        const response = await reqUpdate(user)
        const  result = response.data
        if(result.code === 0){
            dispatch(receiveMsg(result.data))
        }else{
            dispatch(resetMsg(result.msg))
        }
    }
}
//异步获取用户
export  const getUser = ()=>{
    return async dispatch =>{
        const response = await reqUser()
        const result = response.data
        if(result.code === 0){
            dispatch(receiveMsg(result.data))
        }else{
            dispatch(resetMsg(result.msg))
        }
    }
}
//获取用户列表
export const getUserList = (type)=>{
    return async dispatch=>{
        const response = await reqUserList(type)
        const result = response.data
        if(result.code ===0){
           dispatch(receiveUserList(result.data))
        }
    }
}
