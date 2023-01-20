

const express=require("express")
const {connection}=require("./config/db")
const {SignupRoute}=require("./routes/Signup.routes")
const app=express()
 app.use(express.json())



app.use("/signup",SignupRoute)


app.listen(4500,async()=>{
    try{
        await connection
        console.log('connect to db')
    }
    catch(err){
        console.log(err)
        console.log("something is worng")
    }
    console.log( "running  at 4500")
})