module.exports = {
  serverError(res,error){
    console.log(error);
    res.status(500).json({
      message:"error Oucerrd"
    })
  },
  resourceError(res,message){
    res.status(500).json({
      message
    })
  }
}
