const validator = require('validator');
const validate =user=>{
  let error={}
  if(!user.name){
    error.name='Please Provide Your Name'
  }
  if(!user.email){
    error.email='Please Provide Your email'
  }else if(!validator.isEmail(user.email)){
    error.email='Please Provide Your Validate Email'
  }

  if(!user.password){
    error.password='Please Provide Your Password'
  }else if(user.password.length < 6){
    error.password='please Provide Your 6 Cha Password'
  }

  if(!user.confirmPassword){
    error.confirmPassword = 'Please Provide Your confirmPassword'
  }else if(user.password !== user.confirmPassword){
    error.confirmPassword="password Dosenot Match"
  }
  return {
    error,
    isValid:Object.keys(error).length === 0
  }
}
module.exports=validate

// const validator = require('validator');
//
// module.exports = {
//   regValidate(user){
//     let error = {}
//     if(!user.name){
//       error.name = 'Please Provide Your Name'
//     }
//     if(!user.email){
//       error.email='please Provide Your Email'
//     }else if(!validator.isEmail(user.email)){
//       error.email="This is Not Jokes Man, Ai You Check Your email (Angry)"
//     }
//
//     if(!user.password){
//       error.password='Please Your Password'
//     }else if (user.password.length < 6){
//       error.password='please Provide Your 6 Charcter Password'
//     }
//     if(!user.confirmPassword){
//       error.confirmPassword='Please Provide A confirmPassword'
//     }else if(user.password !== user.confirmPassword){
//       error.confirmPassword='Moja Com Lo Password Ta Thik Moto Da'
//     }
//     return{
//       error,
//       isValid:Object.keys(error).length === 0
//     }
//   },
//
//   loginValidate(user){
//     let error={}
//     if(!user.email){
//       error.email="Please provide Your email"
//     }else if(!validator.isEmail(user.email)){
//       error.email="Please Validate Email"
//     }
//     if(!user.password){
//       error.password="Please Provide Your Password"
//     }
//     return{
//       error,
//       isValid:Object.keys(error).length === 0
//     }
//   }
// }
