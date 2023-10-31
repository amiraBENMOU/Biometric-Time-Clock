const express=require('express')
//to connect to the DB
 const dotenv = require('dotenv');
 const morgan = require('morgan');
connectDB=require('./config/bd')
var bodyParser = require('body-parser');
//to remove the uri Error 
dotenv.config();

const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port=5000
app.use(morgan('tiny'))


const start = async()=>{
    try{
         
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listening on port  5000'))
    }
    catch (error){
        console.log(error)
    }
}
start()


// Routes
const employee=require('./routes/employee')

//midelware 
app.use('',employee)

