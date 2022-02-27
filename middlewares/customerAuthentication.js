const jwt=require('jsonwebtoken');


exports.authorisedCustomer=(req,res,next)=>{

    const loginEmail=localStorage.getItem('loginEmail');
if(loginEmail){
    const {authorisation} = req.headers;
    
 if(authorisation){
     
    var header = authorisation.split(' ')[1]
try{
 var token=jwt.verify(header, process.env.SECRET_KEY);
 req.user=token
 if(req.user.Role=='Customer'){
    next();
 }
 else{
    res.status(400).json({
        Message:'admin access denied'

    })
 }

}
 catch (err){
   return res.status(400).json
   ({
       message:err.message
})
 }
}
else{
    res.status(400).json({
        Message:' Authorisation Required'

    })

}
}
else{
    res.status(400).json({
        Message:'You have to login first'

    })
}

}


