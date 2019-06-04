import {reqLogin, reqRegister} from '../api/index'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'

//同步action
const authSuccess = (user) => ({
    type: AUTH_SUCCESS, data: user
})
const errorMsg = (msg) => ({
    type: ERROR_MSG, data: msg
})
//异步action
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