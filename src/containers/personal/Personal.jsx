import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import Cookies from 'js-cookie'
import {resetMsg} from '../../redux/actions'

const Item = List.Item
const Brief = List.Item.Brief

class Personal extends Component {
    logout = () => {
        Modal.alert('退出', '确定退出吗？',
            [
                {
                    text: '取消'
                },
                {
                    text: '确定',
                    onPress: () => {
                        Cookies.remove('userid')
                        this.props.resetMsg()
                    }
                }
            ])
    }

    render() {
        const {username, info, header, company, post, salary} = this.props.user
        return (
            <div style={{ marginTop:45,marginBottom:50 }}>
                <Result
                    img={<img src={require(`./images/${header}.png`)} style={{width: '50px'}} alt="header"/>}
                    message={company}
                    title={username}
                >
                </Result>
                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        <Brief>职位：{post}</Brief>
                        <Brief>简介：{info}</Brief>
                        {salary ? <Brief>薪资：{salary}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Button type='warning' onClick={this.logout}>退出</Button>
                </List>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {resetMsg}
)(Personal)