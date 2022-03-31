const userModel = require('../Models/userModel');





exports.signup = async (req,res,next)=>{
    const findUser = await userModel.findOne({email:req.body.email})
    if(!findUser){

        console.log("Creating User");
    const user = await userModel.create(req.body)
    const token = user.getSignedJwtToken();
    console.log(token)
    res.status(200).json({
        success:true,
        token:token
    })

    }else{
        console.log("User Already Exist");
        res.status(400).json({
            success:false,
            err:"User Already Est"
        })
    }

}


exports.login = async (req, res, next)=>{
    const user = await userModel.findOne({email:req.body.email})
    const token = user.getSignedJwtToken();
res.json({
    auth:true,
    token:token,
    user:user.username
})

}