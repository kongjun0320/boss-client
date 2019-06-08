import React,{Component} from 'react'
import {connect} from 'react-redux'

class Message extends Component{
    render(){
        return (
            <div style={{ marginTop:45,marginBottom:50 }}>
                <h1>
                    Message
                </h1>
            </div>
        )
    }
}
export default connect(
    state=>({}),
    {}
)(Message)