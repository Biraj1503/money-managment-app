import React,{Component} from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import DashBoard from '../Pages/DashBoard'
import Navigation from './Navigation/Navigation'
import {connect} from 'react-redux'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className='container'>
          <Navigation/>
          <Switch>
          {
            this.props.auth.isAuthentication
            ?<Route path='/dashboard' component={DashBoard}/>
            :<Route path='/login' component={Login}/>
          }
            <Route path='/' exact component={Home}/>
            <Route path='/register'  component={Register}/>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
function mapStateToProps(state){
  return {
    auth:state.auth
  }
}
export default connect(mapStateToProps)(App)
