//Middlewares only passed by  authorized admin(owner)
const jwt=require('jsonwebtoken')
exports.authorisedAdmin=(req,res,next)=>{

    const loginNumber=localStorage.getItem('loginNumber');
if(loginNumber){
    const {authorisation} = req.headers;
    
 if(authorisation){
     
    var header = authorisation.split(' ')[1]
try{
 var token=jwt.verify(header, process.env.SECRET_KEY);
 req.user=token
 if(req.user.Role=='Admin'){
    next();
 }
 else{
    res.status(400).json({
        Message:'Customer access denied'

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
