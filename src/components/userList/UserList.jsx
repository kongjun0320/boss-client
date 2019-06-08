import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WhiteSpace, WingBlank, Card} from 'antd-mobile'
import {withRouter} from 'react-router-dom'


const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    render() {
        const {userList} = this.props
        return (
            <WingBlank style={{marginBottom:50,marginTop:50}}>
                {
                    userList.map(user => (
                        <WingBlank key={user._id}>
                            <WhiteSpace></WhiteSpace>
                            <Card onClick={this.props.history.push(`/chat/${user._id}`)}>
                                <Header
                                    thumb={user.header ? require(`./images/${user.header}.png`) : require(`./images/头像1.png`)}
                                    extra={user.username}>
                                </Header>
                                <Body>
                                    <div>职位：{user.post}</div>
                                    {user.company ?  <div>公司：{user.company}</div> : null}
                                    {user.salary ? <div>薪资：{user.salary}</div> : null}
                                    <div>描述：{user.info}</div>
                                </Body>
                            </Card>
                        </WingBlank>
                    ))
                }
            </WingBlank>
        )
    }
}

export default withRouter(UserList)