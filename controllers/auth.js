const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
    const { username, email, password } = await req.body;
    try {
        const user = await User.create({
            username,
            email,
            password,
        });
        sendToken(user,201,res)
    } catch (error) {
        // console.log(error);
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email or password", 400));
    }
    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 404));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 404));
        }

        sendToken(user,200,res)
    } catch (error) {
        // return next(new ErrorResponse("Server Error", 500));
        return next(error)
    }
};

exports.forgotpassword =async (req, res, next) => {
    const {email}=req.body

    try {
        const user=await User.findOne({email})
        if(!user){
            return next(new ErrorResponse("Email could not be verified",404))
        }
        const resetToken=user.getResetPasswordToken()

        await user.save()

        
    } catch (error) {
        
    }
};

exports.resetpassword = (req, res, next) => {
    res.send(" resetpassword Route is this");
};



const sendToken=async (user,statusCode,res)=>{
    const token=user.getSignedToken()
    res.status(statusCode).json({
        success:true,
        token
    })
}