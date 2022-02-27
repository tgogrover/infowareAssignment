const productModel=require('../../dataModels/product_Model');


exports.specificBrowseProduct=(req,res)=>{
    const {id}=req.params;
    productModel.findById(id,'Name,color,Size,Price,Quantity',(err,data)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        else{
            res.status(200).json({
                data
            })
        }

    })

}

exports.BrowseAllProduct=(req,res)=>{
    productModel.find({},'Name,color,Size,Price,Quantity',(err,data)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        else{
            res.status(200).json({
                data
            })
        }

    })

}
