const app=require('./server')
const connectDatabase=require('./config/database')
const bodyParser = require('body-parser')
const cors=require('cors')
const cloudinary=require('cloudinary')
const fileUplaod=require('express-fileupload')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//add the module of file upload
app.use(fileUplaod())

//here we set cloudinary config
cloudinary.config({
    cloud_name:process.env.Cloud_Name,
    api_key:process.env.Api_Key,
    api_secret:process.env.Api_Secret
})
//here we connect we data base
connectDatabase()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/flag.html")
})
const userRoute=require('./routes/userRoute')
const courseRoute=require('./routes/courseRoute')

app.use('/api/v1/',userRoute)
app.use('/api/v1/',courseRoute)
