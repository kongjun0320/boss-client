import  React,{Component} from 'react'
import  {connect} from 'react-redux'
import UserList from '../../components/userList/UserList'
import {getUserList} from '../../redux/actions'

class Dashen extends Component{
    componentDidMount() {
        this.props.getUserList('laoban')
    }

    render(){
        return (
            <div>
                <UserList userList={this.props.userList}></UserList>
            </div>
        )
    }
}
export default connect(
    state=>({userList:state.userList}),
    {getUserList}
)(Dashen)