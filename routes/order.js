const express=require('express');
const router=express.Router();
const {orderProduct,viewOrders}=require('../controllers/customers/orderProducts')
const {authorisedCustomer}=require('../middlewares/customerAuthentication')
const {authorisedAdmin}=require('../middlewares/adminAuthentication')
const {viewAllorders,vieworderByCustomerID,viewordersByOrderID}=
require('../controllers/admin/vieworders')


router.post('/api/customer/addorder',authorisedCustomer,orderProduct)

router.get('/api/customer/getOrder',authorisedCustomer,viewOrders)

router.get('/api/admin/getOrderByOrderID/:id',authorisedAdmin,viewordersByOrderID)
router.get('/api/admin/getOrderByUserID/:id',authorisedAdmin,vieworderByCustomerID)

router.post('/api/admin/getAllorders',authorisedAdmin,viewAllorders)

module.exports=router