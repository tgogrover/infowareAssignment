const signupModel=require('../../dataModels/signup_Model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.login=(req,res)=>{
    const {email}=req.body;
    const legalEmail=signupModel.findOne({
        Email:email
    })
    legalEmail.exec((err,Data)=>{
        if(err) throw err
        if(Data){
             const {Password,Email,Role,_id}=Data
            if(bcrypt.compareSync(req.body.password,Password)){
                if(Role=='Customer'){
                var token = jwt.sign({ _id: _id,Role:Role}, process.env.SECRET_KEY);
                localStorage.setItem("loginEmail",Email);
                localStorage.setItem('loginToken',token);
             
             res.status(200).json({
                 token,
             CustomerData:{Email,Role}
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