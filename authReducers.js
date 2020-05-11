import * as Types from '../Actions/types'
const init = {
  isAuthentication:false,
  user:{},
  error:{}
}
export const authReducer = (state=init,action)=>{
  switch(action.type){
    case Types.SET_USER:{
      return{
        user:action.payload.user,
        message:action.payload.message,
        isAuthentication:Object.keys(action.payload.user).length !== 0,
        error:{}
      }
    }
    case Types.SET_ERROR:{
      return{
        ...state,
        error:action.payload.error
      }
    }
    default : return state
  }
}
