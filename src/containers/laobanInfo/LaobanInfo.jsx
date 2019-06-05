import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/headerSelector/HeaderSelector'
import {updateUser} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

class LaobanInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',
            post: '',
            info: '',
            company: '',
            salary: '',
        }
    }

    handleForm = (name, val) => {
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
        const {header,type} = this.props.user
        if(header){
            const path = type==='dashen'?'/dashen':'/laoban'
            return <Redirect to={path}></Redirect>
        }
        return (
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem onChange={val => {
                    this.handleForm('post', val)
                }}>招聘职位：</InputItem>
                <InputItem onChange={val => {
                    this.handleForm('company', val)
                }}>公司名称：</InputItem>
                <InputItem onChange={val => {
                    this.handleForm('salary', val)
                }}>职位薪资：</InputItem>
                <TextareaItem title='职位要求' rows={3} onChange={val => {
                    this.handleForm('info', val)
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
)(LaobanInfo)