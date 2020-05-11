import React,{Component} from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../Srore/Actions/logout'
class Navigation extends Component {
  render(){
    console.log(this.props);
    return(
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/'>
            <span className='navbar-brand'>Money App</span>
        </Link>
          <button type="button" className='navbar-toggler' data-toggle='collapse' data-target='#nav'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id='nav'>
            <ul className='navbar-nav'>
              {
                this.props.auth.isAuthentication
                ?
                <React.Fragment>
                    <li className='nav-item'>
                      <NavLink to='/dashboard' exact>
                        <span className='nav-link'>DashBoard</span>
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <button onClick={()=>this.props.logout(this.props.history)} className='btn btn-danger'>Logout</button>
                    </li>
                </React.Fragment>
                :
                <React.Fragment>
                  <li className='nav-item'>
                    <NavLink to='/login'>
                      <span className='nav-link'>Login</span>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/register'>
                      <span className='nav-link'>Register</span>
                    </NavLink>
                  </li>
                </React.Fragment>
              }
            </ul>
          </div>
      </nav>
    )
  }
}
const mapStateToProps=(state)=>({
  auth:state.auth
})
export default connect(mapStateToProps,{logout})(withRouter(Navigation))
