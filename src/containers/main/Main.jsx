import React, {Component} from 'react'
import {Route, Switch,Redirect} from 'react-router-dom'
import DashenInfo from '../dashenInfo/DashenInfo'
import LaobanInfo from '../laobanInfo/LaobanInfo'
import {connect} from 'react-redux'

class Main extends Component {
    render() {
        const {_id} = this.props.user
        if (!_id){
            return <Redirect to='/login'></Redirect>
        }
            return (
                <div>
                    <Switch>
                        <Route path='/laobaninfo' component={LaobanInfo}></Route>
                        <Route path='/dasheninfo' component={DashenInfo}></Route>
                    </Switch>
                </div>
            )
    }
}

export default connect(
    state => ({user: state.user})
)(Main)