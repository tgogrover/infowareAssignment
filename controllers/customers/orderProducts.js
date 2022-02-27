const orderModel=require('../../dataModels/order_Model');

exports.orderProduct=(req,res)=>{
    
    const {userAddress}=req.body;
       orderModel.findOne({UserId:req.user._id}).exec((err,success)=>{
      if(err) throw err;
      if(success){
       const {order_Items}=success
       console.log(order_Items)
        
          const Order=new orderModel({
              UserId:req.user._id,
              Items:Cart_Items,
              User_Address:userAddress
          })
        Order.save(async(err,order)=>{
               if(err){
             return   res.status(400).json({
                  Error:err
              })
             
              };
              if(order){
               
                  res.status(201).json({
                    order
                })
              

               
                
              }
    
          })
          
      }
  })

}


exports.viewOrders=(req,res)=>{
    orderModel.findOne({UserId:req.user._id}).exec((err,orders)=>{
        if(err){
            res.status(400).json({
              Error:err
          })
        }
        else{
            res.status(200).json({
                orders
            })
        }

    })

}