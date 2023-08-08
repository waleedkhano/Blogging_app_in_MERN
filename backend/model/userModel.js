const mongoose = require ('mongoose')
const bycrpt = require('bcrypt');
const JWT = require('jsonwebtoken');

const {Schema} = mongoose;

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    admin: String,
});

//Hashing password 
userSchema.pre("save", async function(next){

    if(!this.isModified("password")) return next();

    this.password = await bycrpt.hash(this.password, 10)
    next()
})

//Creating JWT token 
userSchema.methods.getJWTToken = function () {
    return JWT.sign({_id: this._id}, process.env.JWT_SECRET, {
        expiresIn: "10d",
    })
}

//Comparing password for login
userSchema.methods.comparePassword = async function(password){
    return await bycrpt.compare(password, this.password)
}


const UserModel = mongoose.model('NewBlogUsers', userSchema);

module.exports = UserModel;