const User=require("../models/User")

exports.register=async (req,res,next)=>{
    const {username,email,password}=req.body
    try {
        const user=await User.create({
            username,email,password
        })
        res.status(201).json(
            {
                success:true,
                user:user
            }
        )
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}

exports.login=(req,res,next)=>{
    res.send(" Login Route is this")
}

exports.forgotpassword=(req,res,next)=>{
    res.send("forgotpassword Route is this")
}

exports.resetpassword=(req,res,next)=>{
    res.send(" resetpassword Route is this")
}