import {combineReducers} from 'redux'
import {
    AUTH_SUCCESS, ERROR_MSG, RESET__MSG, RECEIVE_MSG, RECEIVE_USER_LIST, RECEIVE_MSG_LIST,
    RECEIVE_MSGTWO,
    MSG_READ
} from './action-types'
import {getRedirectTo} from '../utils/getRedirectTo'

const initChat = {
    chatMsgs: [], // 消息数组 [{from: id1, to: id2}{}]
    users: {}, // 所有用户的集合对象{id1: user1, id2: user2}
    unReadCount: 0 // 未读消息的数量
}
const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: ''
}

/*function chat(state = initChat, action) {
    switch (action.type) {
        case RECEIVE_MSGTWO:
            let {chatMsg,userid} = action.data
            return {
                chatMsgs: [...state.chatMsgs, chatMsg],
                users: state.users,
                unReadCount: state.unReadCount + (!chatMsg.read && chatMsg.to === userid ? 1 : 0)
            }
        case RECEIVE_MSG_LIST:
            let {chatMsgs, users, userid} = action.data
            return {
                chatMsgs,
                users,
                unReadCount: chatMsgs.reduce((preTotal, msg) => { // 别人发给我的未读消息
                    return preTotal + (!msg.read && msg.to === userid ? 1 : 0)
                }, 0)
            }
        case MSG_READ:
            const {count, from, to} = action.data
            return {
                chatMsgs: state.chatMsgs.map(msg => {
                    if (msg.from === from && msg.to === to && !msg.read) {
// msg.read = true // 不能直接修改状态
                        return {...msg, read: true}
                    } else {
                        return msg
                    }
                }),
                users: state.users,
                unReadCount: state.unReadCount - count
            }
        default:
            return state
    }
}*/

// 向外暴露整合所有 reducer 函数的结果
// export default combineReducers({ // 返回的依然是一个 reducer 函数
//     user,
//     userList,
//     chat
// })
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            let {type, header} = action.data
            return {...action.data, redirectTo: getRedirectTo(type, header)}
        case ERROR_MSG:
            return {...state, msg: action.data}
        case RECEIVE_MSG:
            return action.data
        case RESET__MSG:
            return {...state, msg: action.data}
        default:
            return state
    }
}

const initUserList = []

function userList(state = initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data
        default:
            return state
    }
}


export default combineReducers({user, userList, chat})