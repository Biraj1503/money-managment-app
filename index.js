import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './Srore'
import jwtDecode from 'jwt-decode'
import * as Types from './Srore/Actions/types'
import setAuthToken from './utils/setAuthToken'
let token = localStorage.getItem('auth_token')
if(token){
  let decode = jwtDecode(token)
  setAuthToken(token)
  store.dispatch({
    type:Types.SET_USER,
    payload:{
      user:decode
    }
  })
}
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
