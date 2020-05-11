import * as Types from './types'
import Axios from 'axios'
export const updateTrans=(id,transaction)=>dispatch=>{
  Axios.put(`/api/transaction/${id}`, transaction)
  .then(res=>{
    console.log(res);
    dispatch({
      type:Types.UPDATE_TRANSACTION,
      payload:{
        trans:res.data.trans
      }
    })
  })
  .catch(error=>console.log(error))
}
