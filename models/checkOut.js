const mongoose = require('mongoose');


const checkOutSchema= new mongoose.Schema({
 
    checkOutTime: {
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

    const checkOut = mongoose.model('CheckOut', checkOutSchema);

     module.exports = checkOut;