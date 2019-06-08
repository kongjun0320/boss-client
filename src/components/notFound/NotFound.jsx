import React, {Component} from 'react'
import {Button} from 'antd-mobile'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>抱歉，找不到该页面</h1>,
                <Button
                    type="primary"
                    onClick={() => this.props.history.replace('/')}>
                    回到首页
                </Button>
            </div>
        )
    }
}