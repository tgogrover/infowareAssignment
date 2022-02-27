const express=require('express');
const router=express.Router();
const {loginValidation,Validator}=require('../validators/validations')
const {login}=require('../controllers/admin/loginAdmin')
const {Customerlogin,editProfile}=require('../controllers/customers/loginCustomers')
const {authorisedCustomer}=require('../middlewares/customerAuthentication')

//making scratch folder and storing some information(work like cache) in it 
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }




//post request for admin login 
    router.post('/api/admin/login',loginValidation,Validator,login)

     //here only Customer can login
    router.post('/api/customer/login',loginValidation,Validator,Customerlogin)

    router.post('/api/customer/editProfile',authorisedCustomer,editProfile)
module.exports=router;