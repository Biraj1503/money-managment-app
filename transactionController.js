// const Transaction = require('../Model/transactionModel');
// const User = require('../Model/userModel');
// const {serverError} = require('../Error/error');
// module.exports={
//   create(req,res){
//     let {amount,type,note}=req.body
//     let userId = req.user._id
//     let transaction = new Transaction({
//       amount,
//       type,
//       note,
//       author:userId
//     })
//     transaction.save()
//     .then(trans=>{
//       let userUpdate={...req.user}
//       if(type==='income'){
//         userUpdate.balance = userUpdate.balance + amount
//         userUpdate.income = userUpdate.income + amount
//       }else if(type==='expense'){
//         userUpdate.balance = userUpdate.balance - amount
//         userUpdate.expense = userUpdate.expense + amount
//       }
//       console.log(userUpdate);
//       userUpdate.transaction.unshift(trans._id)
//       User.findByIdAndUpdate(userUpdate._id, { $set : userUpdate})
//       res.status(201).json({
//         message:'Data created Successfull',
//         ...trans
//       })
//     })
//     .catch(error=>serverError(res,error))
//   },
//
//   getAll(req,res){
//     Transaction.find()
//     .then(trans=>{
//       if(trans.length===0){
//         res.status(400).json({
//           message:'Transactions Not Found'
//         })
//       }else{
//         res.status(200).json(trans)
//         console.log(trans);
//       }
//     })
//     .catch(error=>serverError(res,error))
//   },
//
//   getSingleTransaction(req,res){
//     let {transactionId} = req.params
//     Transaction.findById(transactionId)
//     .then(trans=>{
//       if(!trans){
//         res.status(200).json({
//           message:'Transactions Not Found'
//         })
//       }else{
//         res.status(200).json(trans)
//
//       }
//     })
//     .catch(error=>serverError(res,error))
//   },
//
//   getUpdate(req,res){
//     let {transactionId} = req.params
//     User.findByIdAndUpdate(transactionId, { $set:req.body})
//     .then(result=>{
//       res.status(201).json({
//         message:'Transactions Update Successfull',
//         ...result
//       })
//     })
//     .catch(error=>serverError(res,error))
//   },
//
//   getDelete(req,res){
//     let {transactionId} = req.params
//     User.findByIdAndRemove(transactionId)
//     .then(result=>{
//       res.status(200).json({
//         message:'Transactions Delete SuccessFull',
//         ...result
//       })
//     })
//     .catch(error=>serverError(res,error))
//   }
// }

const Transaction = require('../Model/transactionModel');
const User = require('../Model/userModel');
const transValidator = require('../Validator/transactionValidator');
const {serverError} = require('../Error/error');
module.exports={
  create(req,res){
    let {amount,type,note}=req.body
    let userId = req.user._id
    let transValidate = transValidator({amount,type,note})
    if(!transValidate.isValid){
      res.status(400).json(transValidate.error)
    }else{
      let transaction = new Transaction({
        amount,
        type,
        note,
        author:userId
      })
      transaction.save()
      .then(trans=>{
        let updateUser={...req.user._doc}
        if(type === 'income'){
          updateUser.balance = updateUser.balance + amount
          updateUser.income = updateUser.income + amount
        }else if(type==='expense'){
          updateUser.balance = updateUser.balance - amount
          updateUser.expense = updateUser.expense + amount
        }
        updateUser.transaction.unshift(trans._id)
        User.findByIdAndUpdate(updateUser._id,{$set:updateUser},{new:true})
        .then(result=>{
          res.status(201).json({
            message:'Transaction create SuccessFull',
            ...trans._doc,
            user:result
          })
        })
        .catch(error=>serverError(res,error))
      })
      .catch(error=>serverError(res,error))
    }
  },

  getAll(req,res){
    let {_id} = req.user
    Transaction.find({author:_id})
    .then(trans=>{
      if(trans.length===0){
        res.status(404).json({
          message:'Transaction Not Found'
        })
      }else{
        res.status(200).json(trans)
      }
    })
    .catch(error=>serverError(res,error))
  },
  Update(req,res){
    let {transactionId} = req.params
    Transaction.findByIdAndUpdate(transactionId,{$set:req.body},{new:true})
    .then(result=>{
        res.status(201).json({
          message:'Update SuccessFull',
          trans:result
        })
    })
    .catch(error=>serverError(res,error))
  },
  Delete(req,res){
    let {transactionId} = req.params
    Transaction.findByIdAndRemove(transactionId)
    .then(result=>{
      res.status(200).json({
        message:'Data Delete SuccessFull',
        ...result._doc
      })
    })
    .catch(error=>serverError(res,error))
  }
}
