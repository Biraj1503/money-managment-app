import * as Types from './types'
import Axios from 'axios'
export const addTransaction = trans=>dispatch=>{
  Axios.post('/api/transaction',trans)
  .then(res=>{
    console.log(res.data);
    dispatch({
      type:Types.NEW_TRANSACTION,
      payload:{
        trans:res.data
      }
    })
  })
  .catch(error=>{
    console.log(error.response.data);
    // dispatch({
    //   type:Types.ERROR_TRANSACTION,
    //   payload:{
    //     error:error.response.data
    //   }
    // })
  })
}
