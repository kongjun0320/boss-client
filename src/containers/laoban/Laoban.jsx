import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from '../../components/userList/UserList'

class Laoban extends Component {
    componentDidMount() {
        this.props.getUserList('dashen')
    }

    render(){
        return (
            <div>
                <UserList userList={this.props.userList}></UserList>
            </div>
        )
    }
}
export default  connect(
    state=>({userList:state.userList}),
    {getUserList}
)(Laoban)
