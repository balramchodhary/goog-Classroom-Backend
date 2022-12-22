const CreateCourse=require('../models/Create_Course')

exports.CreateCourse=async (req,res)=>{
    const createCourse=await CreateCourse.create(req.body)
    res.status(201).json({
        success: true,
      });
}
exports.CourseDetails=async (req,res)=>{
  const courseDetails=await CreateCourse.find()
  res.status(201).json({
    success:true,
    courseDetails
  })
}
exports.UpdateCourse=async (req,res)=>{
  let updateCourse=await CreateCourse.findById(req.params.id)
  updateCourse=await CreateCourse.findByIdAndUpdate(req.params.id,req.body)

  res.status(201).json({
    success:true,
    updateCourse
  })
}