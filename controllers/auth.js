exports.register=(req,res,next)=>{
    res.send("Registser Route")
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