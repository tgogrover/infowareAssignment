const orderModel=require('../../dataModels/order_Model');


exports.viewAllorders=(req,res)=>{
    const orders =  orderModel.find({})
  .populate("Products.ItemId", "Name")
  .exec();
res.status(200).json({ orders });
}

exports.viewordersByOrderID=(req,res)=>{
  const {id}=params;
 const order= orderModel.findById(id).populate("Products.ItemId", "Name")
  .exec();
  res.status(200).json({
    order
  })
}


exports.vieworderByCustomerID=(req,res)=>{
  const order =  orderModel.findOne({UserId:req.user._id})
.populate("Products.ItemId", "Name")
.exec();
res.status(200).json({ order });
}