import * as Types from './types'
export const logout =history=>{
  localStorage.removeItem('auth_token')
  history.push('/login')
  return{
    type:Types.SET_USER,
    payload:{
      user:{},
      message:{}
    }
  }
  //remove token form localStorage
  //redirect login
  //return type
}
// export const logout = (histroy)=>{
//   localStorage.removeItem('auth_token')
//   histroy.push('/login')
//   return{
//     type:Types.SET_USER,
//     payload:{
//       user:{}
//     }
//   }
// }
