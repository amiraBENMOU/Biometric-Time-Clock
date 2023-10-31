const express=require('express')
const controller=require('../controllers/employee')
const axios=require('axios')
const route=express.Router()



route.post('/newEmployee',controller.create);
route.get('/allEmployees',controller.findAll);
route.get('/findByDate',controller.findByDate);
route.post('/check-in',controller.checkIN);
route.post('/check-out',controller.checkOut);

module.exports=route