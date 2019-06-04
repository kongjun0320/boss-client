import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
import {NavBar, List, InputItem, Button, WhiteSpace, WingBlank} from 'antd-mobile'
import Logo from '../../components/logo/Logo'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    register=()=>{
        this.props.history.replace('/register')
    }
    handleForm=(val,name)=>{
        this.setState({
            [name]:val
        })
    }
    login=()=>{
        this.props.login(this.state)
    }
    render() {
        const {msg,redirectTo} = this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo></Logo>
                {msg?<div style={{ 'textAlgin':'center','color':'red','fontSize':'18px' }}>{msg}</div>:null}
                <WingBlank>
                    <List>
                        <WhiteSpace></WhiteSpace>
                        <InputItem onChange={val=>{this.handleForm(val,'username')}}>用户名</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type='password' onChange={val=>{this.handleForm(val,'password')}}>密&nbsp;&nbsp;&nbsp;码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.login}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register}>还没有账户</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {login}
)(Login)