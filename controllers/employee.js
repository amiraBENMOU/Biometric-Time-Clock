const Emp=require('../models/employee')
const checkIn=require('../models/ckeckIn')
const checkOut=require('../models/checkOut')



//create and save new user
exports.create=(req,res)=>{

 // Validate the request data
const requiredFields = ['lastName', 'firstName', 'department'];
const missingFields = requiredFields.filter(field => !req.body[field]);

if (missingFields.length > 0) {
  return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
}

//new user
const emp= new Emp({
    //lazem tsami kif kif name with name
    lastName:req.body.lastName,
    firstName:req.body.firstName,
    department:req.body.department,
    registrationDate,
    

})
//save user in the database
console.log(req.body);
emp
    .save()
    .then(data=>{
        console.log('User saved with id:', data._id);
        console.log('Employee saved with registration date:', data.registrationDate);
        
        res.send(data) // to try 
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some err accured while creating an employee"
        })
    })
}



//display all employees

exports.findAll=(req,res)=>{

    Emp.find()//this function will return all the databases
   .then(data=>{
       res.send(data)
   })
   .catch(err=>{
       res.status(500).send({message:err.message||"Error Occured while displaying all employees"})
   })
   }



   //find employees by date of creation
        
    exports.findByDate=(req,res)=>{
        const date=req.query.date
         Emp.find({registrationDate:{$eq:date}})//this function will return all the databases
       .then(data=>{
           if(!data){
                 res.status(404).send({ message : "Not found employee with saved date "+ id})
            }else{
                  res.send(data)
                }
               })
      .catch(err=>{
              res.status(500).send({message:err.message||"Error Occured while displaying all employees"})
         })
         }


         //check in 
      exports.checkIN=(req,res)=>{
            try {
                // Extract check-in data from the request body
                const { _id, checkInTime } = req.body;
            
                // Check if the specified employee exists
                const employeeCheckedIn = checkIn.findById(_id);
            
                if (!employee) {
                  return res.status(404).json({ error: 'Employee not found' });
                }
            
                // Create a new CheckIn instance associated with the employee
                const newCheckIn = new checkIn({
                  checkInTime,
                  comments,
                  employee: employeeId, // Set the reference to the Employee
                });
            
                // Save the new CheckIn record to the database
                 newCheckIn.save();
            
                res.status(201).json(newCheckIn);
              } catch (error) {
                console.error(err);
                // Handle errors, e.g., validation errors or database issues
                res.status(500).json({ error: 'Failed to create a CheckIn record' });
              }
            };
            
            
     //check out
     exports.checkOut=(req,res)=>{
        try {
            // Extract check-in data from the request body
            const { _id, checkOutTime } = req.body;
        
            // Check if the employeespecified has been checked in
            const empCheckIn = checkIn.findById(_id);
             
            if (!empCheckIne) {
                return res.status(404).json({ error: 'Employee has not been checked in ' });
              }
          
            
            // Get the current date and time
            const currentDate = new Date();

            // Check if the check-in date is on the same day as the current date
            if (!isSameDay(empCheckIne.checkInTime, currentDate)) {
               return res.status(400).json({ error: 'Check-in date is not on the same day as the current date' });
             }
            

           
            // Create a new CheckIn instance associated with the employee
            const newCheckOut = new checkOut({
              checkOutTime,
              comments,
              employee: employeeId, // Set the reference to the Employee
            });
        
            // Save the new CheckOut record to the database
            newCheckOut.save();
        
            res.status(201).json(newCheckOut);
          } catch (error) {
            console.error(err);
            // Handle errors, e.g., validation errors or database issues
            res.status(500).json({ error: 'Failed to create a CheckOut record' });
          }
        };
        


