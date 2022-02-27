const signupModel=require('../../dataModels/signup_Model');
const bcrypt=require('bcrypt');


exports.customerSignup=async(req,res)=>{
   const {password,contacts,email,name}=req.body;
   var conditionCheck=await signupModel.findOne
       ({ $or:[{Email:email},{Mobile_Number:contacts}]}).exec((err,data)=>{
           if(data){
            //console.log(conditionCheck)
            return  res.status(400).json({
                   Message:'Try another mobile Number or Email '
               })
           }
           else{
                let profileImages= [];   
            //    console.log(req.files)     
                if (req.files.length > 0) {
                    profileImages= req.files.map((file) => {
                    return { img: file.filename };
                  });
                }
                const Hash_Password=bcrypt.hashSync(password,10);
                const User=new signupModel({
                    Password:Hash_Password,
                    Phone_Number:contacts,
                    Email:email,
                    Mobile_Number:contacts,
                    Profile_Photo:profileImages,
                    Name:name
            })
               User.save((err,Data)=>{             
               if(Data){
                   const {Phone_Number,Role}=Data;
                res.status(201).json({
                    message:' Admin created Successfully',
                    Response:{Phone_Number,Role}
                })    
               }  
       });
     
    }

})

}
    

