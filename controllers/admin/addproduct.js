const productModel=require('../../dataModels/product_Model');

exports.makeProduct=(req,res)=>{
    const {color,name,size,quantity,price}=req.body;
    const product=new productModel({
        Admin:req.user._id,
        color:color,
        Name:name,
        Size:size,
        Quantity:quantity,
        Price:price
    })
    product.save((err,data)=>{

        if(err){
        return    res.status(400).json({
            error:err
            })
        }
        else{
            req.status(201).json({
                data

            })
        }

    })



}