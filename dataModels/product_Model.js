const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    Admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    color:{
        type:String,
        required:true,
        enum:['Red', 'White', 'Grey', 'Blue', 'Black', 'Cream', 'Green'],
        default:'Red'
    },
   Name:{ 
       type:String,
    required:true
    },
   Size:{
       type:String,
       enum:[ 'M', 'L', 'XL'],
       default:'M',
       required:true,
   },
   Quantity:{
       required:true,
       type:Number
   },
   Price:{
    required:true,
    type:Number

   }

}, { timestamps: true })


module.exports=mongoose.model('Product',ProductSchema)