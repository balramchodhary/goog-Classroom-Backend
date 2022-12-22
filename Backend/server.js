const express=require('express')
const app=express()


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "Backend/config/config.env" });
  }

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.listen(process.env.PORT,()=>{
    console.log(`server run on port :${process.env.PORT}`)
})

module.exports =app