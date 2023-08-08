const UserModel = require('../model/userModel')
const sendToken = require("../utils/sendToken")
const catchAsyncError = require("../middleware/catchAsyncError")

const register = catchAsyncError( async (req, res, next)=>{
    const {name, email, password} = req.body;

    // check if name is entered
    if(!name || !email || !password){
        return next(new Error("Please enter all fields", 400))
    }

    //check length of the password 
    if(password.length < 6){
        return next(new Error("The password charater must be more than 6!"))
    }

    // check if email exists
    const exists = await UserModel.findOne({email});

    if(exists){
        return next( Error("Email Already registered"))
    }

    // Creating a new user in database
    const user = await UserModel.create({
        name,
        email,
        password
    });

    // if Successfully created

   sendToken(res, user, "User has been registered successfully",201);
});


const signin = catchAsyncError( async (req, res, next)=>{
        const { email, password} = req.body
        if (!email || !password) {
            return next(new Error("Please enter all fields", 400));
        }

        //check if the user exist
        const user = await UserModel.findOne({email})
        if(!user){
            return next(new Error("Incorrect email or password"))
        }

        //Check if password match
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return next(new Error("Incorrect Email or Password", 401))
        } 

        sendToken(res, user, `welcome back! ${user.name}`, 200)
       
    });

const logOut =catchAsyncError(async (req, res) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }).json({
        success: true,
        message: "Logged out Successfully",
    })
  });
  

  

module.exports = {
    register,
    signin,
    logOut
}
