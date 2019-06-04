import React, {Component} from 'react'
import Logo from '../../components/logo/Logo'
import {NavBar, List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/actions'
const ListItem = List.Item

 class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            type: 'dashen'
        }
    }

    register = () => {
        this.props.register(this.state)
    }
    handleForm = (val, name) => {
        this.setState({
            [name]: val
        })
    }
    login=()=>{
        this.props.history.replace('/login')
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
                <WingBlank>
                    {msg?<div style={{ 'textAlgin':'center','color':'red','fontSize':'18px' }}>{msg}</div>:null}
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <InputItem onChange={val => {
                            this.handleForm(val, 'username')
                        }}>用户名：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={val => {
                            this.handleForm(val, 'password')
                        }}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type="password" onChange={val => {
                            this.handleForm(val, 'confirmPassword')
                        }}>确认密码：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <ListItem>
                            <span>用户类型</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => {
                                this.handleForm('dashen', 'type')
                            }}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => {
                                this.handleForm('laoban', 'type')
                            }}>老板</Radio>
                        </ListItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.register}>注册</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.login}>已有账号</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {register}
)(Register)