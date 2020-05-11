import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../Srore/Actions/login'
class Login extends Component{
  state={
    email:'',
    password:'',
    error:{}
  }
  changehendeler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHan=(e)=>{
    e.preventDefault()
    let {email,password}=this.state
    this.props.login({email,password},this.props.history)
  }
  static getDerivedStateFromProps(nextProps,prevState){
    if(JSON.stringify(nextProps.auth.error)!== JSON.stringify(prevState.error)){
      return{
        error:nextProps.auth.error
      }
    }
    return null
  }
  render(){
    let {email,password,error} = this.state

    return(
      <div className="col-md-6">
        <h1>Login Here</h1>
        <form className="" onSubmit={this.submitHan}>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input onChange={this.changehendeler} type="email" className={error.email?'form-control is-invalid':'form-control'} name="email" value={email} id='email' placeholder="Enter Your Email"/>
            {
              error.email
              ?<div className='invalid-feedback'>
                {error.email}
              </div>:''
            }
          </div>

          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input onChange={this.changehendeler} type="password" className={error.password?'form-control is-invalid':'form-control'} name="password" value={password} id='password' placeholder="Enter Your Password"/>
            {
              error.password
              ?<div className='invalid-feedback'>
                {error.password}
              </div>:''
            }
          </div>

          <Link to='/register' className='d-block'>Your Have Auccount ? Register Here</Link>
          <input type="submit" className='d-block my-3 btn btn-success' name="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    auth:state.auth
  }
}
export default connect(mapStateToProps,{login})(Login)
