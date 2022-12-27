const CreateCourse = require('../models/Create_Course')
const cloudinary = require('cloudinary')

exports.CreateCourse = async (req, res) => {

  const createCourse=await CreateCourse.create(req.body)
  res.status(201).json({
    success: true,
  });
}
exports.CourseDetails = async (req, res) => {
  const courseDetails = await CreateCourse.find()

  if (!courseDetails) {
    res.status(501).json({
      success: false,
      massage: "sorry course not found into database"
    })
  }
  res.status(201).json({
    success: true,
    courseDetails
  })
}
exports.OneCourseDetails=async (req,res)=>{
  const oneCourse =await CreateCourse.findById(req.params.id)
  
  if(!oneCourse){
    res.status(501).json({
      success:false,
      massage:"sorry course not exist into database"
    })
  }

  res.status(201).json({
    success:true,
    oneCourse
  })
}
exports.UpdateCourse = async (req, res) => {
  let updateCourse = await CreateCourse.findById(req.params.id)

  if (!updateCourse) {
    res.status(501).json({
      success: false,
      masssage: "Item is not found into data base so we cannot update it"
    })
  }
  updateCourse.Chats.push(req.body)
  await CreateCourse.findByIdAndUpdate(req.params.id, updateCourse)

  res.status(201).json({
    success: true,
    updateCourse
  })
}