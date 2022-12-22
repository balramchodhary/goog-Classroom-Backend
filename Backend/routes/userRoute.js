const express=require('express')

const {createUser,userDetails} =require('../controllers/userController')

const router=express.Router()

router.route('/create-user').post(createUser)
router.route('/user-details').get(userDetails)

module.exports=router