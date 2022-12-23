const mongoose =require('mongoose')

const CreateCourse=new mongoose.Schema({
    CourseName:{
        require:true,
        type:String,
        maxLength:[20,"String length cannot exceed 20 characters"]
    },
    CourseCode:{
        require:true,
        type:String,
        maxLength:[10,"String length cannot exceed 10 characters"]
    },
    JoinCode:{
        require:true,
        type: String,
        minLength:[6,"the minimum length of Course Code is 6"],
        maxLength:[6,"the maximum length of Course Code is 6"]
    },
    Discription:{
        require:true,
        type:String,
        maxLength:[100,"string length cannot exceed 100 character"]
    },
    CreatedBy:{
        Name:{
            require:true,
            type:String
        },
        Id:{
            require:true,
            type:Number
        }
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports=mongoose.model("Create_Course",CreateCourse)