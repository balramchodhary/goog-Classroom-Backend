const mongoose = require('mongoose')
const validator = require('validator')

const CreateUser = new mongoose.Schema({
    FirstName: {
        require: true,
        type: String,
        maxLength: [30, "maximum String Length of Characters is 30"]
    },
    LastName:{
        require: true,
        type: String,
        maxLength: [30, "maximum String Length of Characters is 30"]
    },
    Email: {
        require: true,
        type: String,
        maxLength: [30, "maximum String Length of Characters is 30"],
        unique: true,
        validate: [validator.isEmail, "this is check email valid or not"]
    },
    Password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    Avatar: {
        Public_id: {
            type: String,
            required: true,
        },
        Url: {
            type: String,
            required: true,
        },
    },
    Role: {
        type: String,
        default: "user",
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports=mongoose.model("Create_User",CreateUser)