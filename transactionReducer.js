import * as Types from '../Actions/types'
// const init =[{
//   transaction:{},
//   error:{}
// }]


export const transactionReducer = (state=[], action)=>{
  switch(action.type){
    case Types.LOAD_TRANSACTION :{
      return action.payload.trans
    }
    case Types.NEW_TRANSACTION:{
      let trans=[...state]
      trans.unshift(action.payload.trans)
      return trans
    }
    case Types.ERROR_TRANSACTION :{
        let error = [...state]
        error.push({error:action.payload.error})
        return error
    }
    case Types.REMOVE_TRANSACTION :{
      let trans = [...state]
      return trans.filter(trans=>{
        return trans._id !== action.payload.id
      })
    }
    case Types.UPDATE_TRANSACTION :{
      let trans = [...state]
      return trans.map(trans=>{
        if(trans._id === action.payload.trans._id){
          return action.payload.trans
        }
        return trans
      })
    }
    default:return state
  }
}
