const express=require('express');
const router=express.Router();
const {makeProduct}=require('../controllers/admin/addproduct');
const {authorisedAdmin}=require("../middlewares/adminAuthentication")
const {specificBrowseProduct,BrowseAllProduct}=require('../controllers/customers/browseProducts');
const {authorisedCustomer}=require("../middlewares/customerAuthentication")

 


router.post('/api/admin/addProduct',authorisedAdmin,makeProduct);
router.post('/api/customer/viewProduct/:id',authorisedCustomer,specificBrowseProduct);  
router.post('/api/customer/viewProduct',authorisedCustomer,BrowseAllProduct);  

module.exports=router;