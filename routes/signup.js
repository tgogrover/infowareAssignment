const express=require('express');
const router=express.Router();
const {signupValidation,Validator}=require('../validators/validations')
const multer=require('multer');
const {signup}=require('../controllers/admin/signupAdmin')
const {customerSignup}=require('../controllers/customers/signupCustomer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  'profileUploads')
    },
    filename: function (req, file, cb) {
      cb(null,  req.body.email + '-' + file.originalname)
    }
})


const fileUpload = multer({ storage });


//only admin can signup here
router.post('/api/admin/signup',signupValidation,Validator,fileUpload.single('profileImage'),signup);

// //only customers signup here
 router.post('/api/customer/signup',signupValidation,Validator,fileUpload.single('profileImage'),
 customerSignup)
    
     
// })









module.exports=router;
