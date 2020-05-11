const validator = require('validator');

const loginValidate=user=>{
  let error={}
  if(!user.email){
    error.email="Please provide Your email"
  }else if(!validator.isEmail(user.email)){
    error.email="Please Validate Email"
  }
  if(!user.password){
    error.password="Please Provide Your Password"
  }
  return{
    error,
    isValid:Object.keys(error).length === 0
  }
}
module.exports = loginValidate
