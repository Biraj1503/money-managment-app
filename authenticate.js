// const passport = require('passport');
//
// module.exports=(req,res,next)=>{
//   passport.authenticate('jwt',(err,user,info)=>{
//     if(err){
//       return next(err)
//     }
//     if(!user){
//       res.status(404).json({
//         message:"Athenticated Falid"
//       })
//     }
//     req.user = user
//     return next()
//   })(req,res,next)
// }
 const passport = require('passport');
 module.exports = (req,res,next)=>{
   passport.authenticate('jwt',(err,user,info)=>{
     if(err){
       return next(err)
     }
     if(!user){
       res.status(404).json({
         message:'Athentication Falid'
       })
     }
     req.user = user
     return next()
   })(req,res,next)
 }
