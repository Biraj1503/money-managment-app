import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import * as Types from './types'
import setAuthToken from '../../utils/setAuthToken'
export const login = (user,history)=>dispatch=>{
  Axios.post('/api/user/login',user)
  .then(res=>{
    // let token = res.data.token
    // localStorage.setItem('auth_token',token)
    // setAuthToken(token)
    // let decode = jwtDecode(token)
    // dispatch({
    //   type:Types.SET_USER,
    //   payload:{
    //     user:decode
    //   }
    // })
    // history.push('/')
    let token = res.data.token
    let message = res.data.message
    localStorage.setItem('auth_token',token)
    setAuthToken(token)
    let decode = jwtDecode(token)
    dispatch({
      type:Types.SET_USER,
      payload:{
        user:decode,
        message
      }
    })
    history.push('/dashboard')
    //abstrucated token
    //save localStorage token
    //token decode
    //dispatch SET_USER
    //redirect home page
    //set Auth Headers
  })
  .catch(error=>{
    console.log(error.response.data);
    dispatch({
      type:Types.SET_ERROR,
      payload:{
        error:error.response.data
      }
    })
  })
}
