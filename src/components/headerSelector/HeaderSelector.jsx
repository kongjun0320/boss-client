import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'


export default class HeaderSelector extends Component {
    constructor(props) {
        super(props)
        this.headerList = []
        for (let i = 0; i < 20; i++) {
            this.headerList.push({
                text: '头像' + (i + 1),
                icon: require(`./images/头像${i + 1}.png`)
            })
        }
    }

    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }
    state = {
        icon: null
    }
    handleClik = ({text, icon}) => {
        this.setState({
            icon
        })
        this.props.setHeader(text)
    }

    render() {
        let {icon} = this.state
        const listHeader = icon ? (
            <div>
                已选择头像
                <img src={icon} alt=""/>
            </div>
        ) : '请选择头像'
        return (
            <div>
                <List renderHeader={() => listHeader}>
                    <Grid data={this.headerList} columnNum={5} onClick={this.handleClik}></Grid>
                </List>
            </div>
        )
    }
}