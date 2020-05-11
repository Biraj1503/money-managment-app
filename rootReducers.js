import {combineReducers} from 'redux'
import {authReducer} from './authReducers'
import {transactionReducer} from './transactionReducer'
const Rootreducers = combineReducers({
  auth:authReducer,
  trans:transactionReducer
})
export default Rootreducers
