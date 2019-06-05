import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG, RESET__MSG, RECEIVE_MSG} from './action-types'
import {getRedirectTo} from '../utils/getRedirectTo'

const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: ''
}

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

export default combineReducers({user})