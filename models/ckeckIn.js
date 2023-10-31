const mongoose = require('mongoose');


const checkInSchema= new mongoose.Schema({
 
    checkInTime: {
        type: Date,
        default: Date.now,
         
      },
      comments: {
        type: String,
       required: false,
      },
      // Reference to Employee
      employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', // This should match the model name defined earlier
      },

    });

    const CheckIn = mongoose.model('CheckIn', checkInSchema);

     module.exports = CheckIn;