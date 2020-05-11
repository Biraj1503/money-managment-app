const regValidate = require('../Validator/userValidator');
const loginValidate = require('../Validator/loginValidation');
const {serverError,resourceError} = require('../Error/error');
const bcrypt = require('bcrypt');
const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
module.exports={
  login(req,res){
    let {email,password}=req.body
    let loginValidator = loginValidate({email,password})
    if(!loginValidator.isValid){
      res.status(404).json(loginValidator.error)
    }else{
      User.findOne({email})
      .then(user=>{
        if(user){
          bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
              resourceError(res,"server Error")
            }
            if(result){
              let token = jwt.sign({
                _id:user._id,
                name:user.name,
                email:user.email,
                balance:user.balance,
                expense:user.expense,
                income:user.income,
                transaction:user.transaction
               },"SECRET",{expiresIn:'2h'})
              res.status(201).json({
                message:"Login Successfully",
                token:`Bearer ${token}`
              })
            }else{
              resourceError(res,"Password Dosenot Match")
            }
          })
        }else{
          resourceError(res,"User Not Found")
        }
      })
      .catch(error=>serverError(res,error))
    }
  },
  registerCo(req,res){
    let {name,email,password,confirmPassword} = req.body
    let validate = regValidate({name,email,password,confirmPassword})
    // console.log(validate);
    if(!validate.isValid){
      res.status(404).json(validate.error)
    }else{
      User.findOne({email})
      .then(user=>{
        if(user){
          return resourceError(res,'All Ready Use This Email')
        }
        bcrypt.hash(password,11,(err,hash)=>{
          if(err){
            res.status(500).json({
              message:'Error Ouccerd'
            })
          }
          let user= new User({
            name,
            email,
            password:hash,
            balance:0,
            income:0,
            expense:0,
            transaction:[]
          })
          user.save()
          .then(user=>{
            res.status(201).json({
              message:"Registaion Successfully",
              user
            })
          })
          .catch(error=>serverError(res,error))
        })
      })
    .catch(error=>serverError(res,error))
    }
  },

  getAll(req,res){
    User.find()
    .then(user=>{
      res.status(200).json(user)
    })
    .catch(error=>serverError(res,error))
  }
}
