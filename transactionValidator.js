const transValidator=(trans)=>{
  let error = {}
  if(!trans.amount){
    error.amount = 'Please Provide Your Amount'
  }
  if(!trans.type){
    error.type = 'Please Provide Your Time'
  }

  if(!trans.note){
    error.note = 'Please Provide Your Note'
  }
  return{
    error,
    isValid:Object.keys(error).length === 0
  }
}

module.exports = transValidator
