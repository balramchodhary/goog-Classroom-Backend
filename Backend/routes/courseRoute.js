const express=require('express')


const router=express.Router()


const{CreateCourse,CourseDetails,UpdateCourse} =require('../controllers/courseController')

router.route('/create-course').post(CreateCourse)
router.route('/course-details').get(CourseDetails)
router.route('/update-course/:id').put(UpdateCourse)
module.exports = router;