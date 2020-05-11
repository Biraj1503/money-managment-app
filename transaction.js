import * as Types from './types'
import Axios from 'axios'
export const transAction=()=>dispatch=>{
  Axios.get('/api/transaction')
  .then(res=>{
    dispatch({
      type:Types.LOAD_TRANSACTION,
      payload:{
        trans:res.data
      }
    })
  })
  .catch(error=>console.log(error))
}
