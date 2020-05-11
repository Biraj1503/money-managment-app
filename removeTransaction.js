import * as Types from './types'
import Axios from 'axios'

export const removeTransaction =id=>dispatch=>{
  Axios.delete(`/api/transaction/${id}`)
  .then(res=>{
    dispatch({
      type:Types.REMOVE_TRANSACTION,
      payload:{
        id:res.data._id
      }
    })
  })
  .catch(error=>console.log(error))
}
