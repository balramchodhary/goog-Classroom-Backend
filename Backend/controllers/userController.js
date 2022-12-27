const CreateUser=require('../models/Create_User')

exports.createUser=async (req,res)=>{
    const createUser=await CreateUser.create(req.body)

    res.status(201).json({
        success: true,
      })
}
exports.userDetails=async (req,res)=>{
  const userData=await CreateUser.find();

  if(!userData){
    res.status(501).json({
      success:false,
      massage:"user data is not found into database"
    })
  }
  res.status(201).json({
    success:true,
    userData
  })
}