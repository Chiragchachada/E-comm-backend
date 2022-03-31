const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    username:String,
    role:String
},
{collection:"User"});


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.getSignedJwtToken = function(){
    const token = jwt.sign({id:this._id, username:this.username, role:this.role}, "p@ssw0rd",{
        expiresIn: "30d"
    })
    return token;
}

const userModel = mongoose.model("userSchema", userSchema)
module.exports = userModel