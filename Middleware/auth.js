const userModel = require('../Models/userModel')

const authenticate = async function(req , res, next){
    console.log("Finding user");
    const user = await userModel.findOne({email:req.body.email})

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

const isAuthenticateUser = async function(req,res,next){
    const token = req.header["token"];
    console.log(token);
    if(token) {
        const tokens = token.split(' ')
        try{
            const decodeData = jwt.verify(tokens[1], "p@ssw0rd");
            console.log("decodeData", decodeData);
            if(decodeData.role){
                req.role = decodeData.role
            }
            next();
        }catch(err){
            console.log("error caught", err);
            next(err)

        }
    }
    else{
        res.status(403).send('You are not authorised to access this data')
    }
}

module.exports={authenticate,isAuthenticateUser}