const mongoose = require('mongoose');



const departmentValues = ['A', 'B', 'C'];

const employeeSchema= new mongoose.Schema({
 
  lastName: {
    type: String,
    required:true,
  },
  firstName: {
    type: String,
    required:true,
  },
  
  department: {
    type: String,
    enum: departmentValues,
    required: true,
  },
  registrationDate: {
   type: Date,
    default: Date.now,
    required: false,
  },
  
}); 


 const Employee=mongoose.model('Employee',employeeSchema)
 module.exports=Employee;