import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import DashenInfo from '../dashenInfo/DashenInfo'
import LaobanInfo from '../laobanInfo/LaobanInfo'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {getRedirectTo} from '../../utils/getRedirectTo'
import {getUser} from '../../redux/actions'
import Laoban from '../laoban/Laoban'
import Dashen from '../dashen/Dashen'
import Message from '../message/Message'
import Personal from '../personal/Personal'
import NotFound from '../../components/notFound/NotFound'
import {NavBar} from 'antd-mobile'
import  NavFooter from '../../components/navFooter/NavFooter'
import  Chat from '../../containers/chat/Chat'
import './main.css'

class Main extends Component {
    navList = [
        {
            path: '/laoban',
            component: Laoban,
            title: '大神列表',
            icon: 'dashen',
            text: '大神'
        },
        {
            path: '/dashen',
            component: Dashen,
            title: '老板列表',
            icon: 'laoban',
            text: '老板'
        },
        {
            path: '/message',
            component: Message,
            title: '消息列表',
            icon: 'message',
            text: '消息'
        },
        {
            path: '/personal',
            component: Personal,
            title: '个人中心',
            icon: 'personal',
            text: '个人'
        }
    ]

    componentDidMount() {
        const userid = Cookies.get('userid')
        const {_id} = this.props.user
        if (userid && !_id) {
            this.props.getUser()
        }
    }


    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            return <Redirect to='/login'></Redirect>
        }
        const {user} = this.props
        if (!user._id) {
            return null
        } else {
            let path = this.props.location.pathname
            if (path === '/') {
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path}></Redirect>
            }
        }
        const {navList} = this
        const path = this.props.location.pathname
        const currentNav = navList.find(nav => nav.path === path)
        if(currentNav){
            if(user.type === 'laoban'){
                navList[1].hide= true
            }else {
                navList[0].hide= true
            }
        }
        return (
            <div>
                {currentNav ? <NavBar className='mainHeader'>{currentNav.title}</NavBar> : null}
                <Switch>
                    {
                        navList.map((nav,index) => <Route key={index} path={nav.path} component={nav.component}></Route>)
                    }
                    <Route path='/laobaninfo' component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                    <Route path='/chat/:userid' component={Chat}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
                {currentNav ? <NavFooter navList={navList}></NavFooter> : null}
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {getUser}
)(Main)