const mongoose=require('mongoose')
mongoose.set('strictQuery', false);




const connectDB = (url) =>{
   
    return mongoose.connect(url,{useNewUrlParser: true}).then(()=> console.log('connected to the DB'))
                                                       .catch((err) => console.log(err))
                       
        }



module.exports = connectDB
