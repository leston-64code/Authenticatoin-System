const User=require("../models/User")

exports.register=async (req,res,next)=>{
    const {username,email,password}= await req.body
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

exports.login=async (req,res,next)=>{
    const {email,password}=req.body
    if(!email||password){
        res.status(400).josn({
            success:false,
            error:"Please provide email and password"
        })
    }
    try {
        const user=await User.findOne({email}).select("+password")

        if(!user){
            res.status(404).json({
                success:false,
                error:"Invalid credentilas"
            })
        }

        const isMatch=await user.matchPasswords(password)

        if(!isMatch){
            res.status(404).json({
                success:false,
                error:"Invalid credentials"
            })
        }
    } catch (error) {
        
    }
}

exports.forgotpassword=(req,res,next)=>{
    res.send("forgotpassword Route is this")
}

exports.resetpassword=(req,res,next)=>{
    res.send(" resetpassword Route is this")
}