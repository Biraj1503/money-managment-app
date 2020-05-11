import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../Srore/Actions/createActions'
class Register extends Component{
  state={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    error:{}
  }
  static getDerivedStateFromProps(nextProps,prevState){
    if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)){
      return{
        error:nextProps.auth.error
      }
    }
    return null
  }

  changeHandeler=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandeler=(e)=>{
    e.preventDefault()
    let {name,email,password,confirmPassword,error} = this.state
    this.props.register({name,email,password,confirmPassword},this.props.history)
  }
  render(){
    let {name,email,password,confirmPassword,error} = this.state
    // console.log(error);
    return(
      <div className="col-md-6">
        <h1>Registation Here</h1>
        <form className=""  onSubmit={this.submitHandeler}>
          <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input onChange={this.changeHandeler} type="text" className={error.name? "form-control is-invalid":'form-control'} name="name" value={name} id='name' placeholder="Enter Your Name"/>
            <div className='invalid-feedback'>
              {error.name}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input onChange={this.changeHandeler} type="email" className={error.email?"form-control is-invalid":'form-control'} name="email" value={email} id='email' placeholder="Enter Your Email"/>
            <div className='invalid-feedback'>
              {error.email}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input onChange={this.changeHandeler} type="password" className={error.password?"form-control is-invalid":'form-control'} name="password" value={password} id='password' placeholder="Enter Your Password"/>
            <div className='invalid-feedback'>
              {error.password}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">confirmPassword : </label>
            <input onChange={this.changeHandeler} type="password" className={error.confirmPassword?"form-control is-invalid":'form-control'} name="confirmPassword" value={confirmPassword} id='confirmPassword' placeholder="Enter Your Name"/>
            <div className='invalid-feedback'>
              {error.confirmPassword}
            </div>
          </div>
          <Link to='/login' className='d-block'>Have Your Auccount Allready? Login Here</Link>
          <input type="submit" className='d-block my-3 btn btn-primary' name="submit" value="Register"/>
          {
            error.message
            ?
            <div>{error.message}</div>
            :''
          }
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

export default connect(mapStateToProps,{register})(Register)
