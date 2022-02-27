const signupModel=require('../../dataModels/signup_Model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.Customerlogin=(req,res)=>{
    const {email}=req.body;
    const legalEmail=signupModel.findOne({
        Email:email
    })
     legalEmail.exec((err,Data)=>{
        if(err) throw err
        if(Data){
             const {Password,Email,Role,_id,Mobile_Number}=Data
            if(bcrypt.compareSync(req.body.password,Password)){
                if(Role=='Customer'){
                var token = jwt.sign({ _id: _id,Role:Role}, process.env.SECRET_KEY);
                localStorage.setItem("loginEmail",Email);
                localStorage.setItem('loginToken',token);
             
             res.status(200).json({
                 token,
             CustomerData:{Email,Role,Mobile_Number}
             })  
            }
            else{
                res.status(400).json({
                  Message:'Admin and Delivery Person Acccess denied'
                })  

            }
           
        }
    
        else{
            res.status(400).json({
                Message:'Invalid password '
            })
        }
    }
    else{
        res.status(400).json({
            message:'You have to sigin First'
        })
    }
})
}


exports.editProfile=(req,res)=>{
    const {password,contacts,name}=req.body;

   // { $or:[{Email:email},{Mobile_Number:contacts}]}
    signupModel.findByIdAndUpdate(req.user._id,{ $or:[{Password:password},
        {Mobile_Number:contacts},{Name:name}]}).exec((err,data)=>{
            if(err){
                res.status(400).json({
                   Error:err
                })
            }
            else{
                const {email,Mobile_Number,Name}=data
                res.status(201).json({
                    email,Mobile_Number,Name
                })
            }
          

        })
}