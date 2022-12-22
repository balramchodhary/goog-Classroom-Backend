const app=require('./server')
const connectDatabase=require('./config/database')
const bodyParser = require('body-parser')
const cors=require('cors')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


connectDatabase()

const userRoute=require('./routes/userRoute')
const courseRoute=require('./routes/courseRoute')

app.use('/api/v1/',userRoute)
app.use('/api/v1/',courseRoute)
