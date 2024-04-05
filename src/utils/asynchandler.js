const asynchandler = (reqfunction)=>{
  return (req,res,next) =>{
    Promise.resolve(reqfunction(req,res,next)).catch((err) => next(err))
  }
}

export {asynchandler}  
