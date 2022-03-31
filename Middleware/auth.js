const userModel = require('../Models/userModel')

const authenticate = async function(req , res, next){
    console.log("Finding user");
    const user = await userModel.findOne({email:req.body.email})
    console.log("User Match");

    if(user){
        const isMatch = await user.matchPassword(req.body.password)
        if(isMatch){
            console.log("password match");
            next()
        }else{
            res.status(401).send("Invalid Password")
        }
    }else{
        res.status(404).send("Invalid Credentials")
    }
}


module.exports={authenticate}