import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/headerSelector/HeaderSelector'
import {Redirect} from 'react-router-dom'
import {updateUser} from '../../redux/actions'

class DashenInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',
            post: '',
            info: '',
        }
    }

    handleClick = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    save = () => {
        this.props.updateUser(this.state)
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }

    render() {
        const {header, type} = this.props.user
        if (header) {
            const path = type === 'dashen' ? '/dashen' : '/laoban'
            return <Redirect to={path}></Redirect>
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem onChange={val => {
                    this.handleClick('post', val)
                }}>求职岗位：</InputItem>
                <TextareaItem title='个人介绍' rows={3} onChange={val => {
                    this.handleClick('info', val)
                }}></TextareaItem>
                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    {updateUser}
)(DashenInfo)