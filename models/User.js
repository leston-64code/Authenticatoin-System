const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please porvide a username"]
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
        match:[
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ,"Please provide a valid email"
        ]
    },
    passowrd:{
        type:String,
        required:[true,"Please add a  passwrod"],
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }

    const salt =await bcrypt.genSalt(10)
    this.passowrd=await bcrypt.hash(this.passowrd,salt)
    next()
})

const User=mongoose.model("User",userSchema)
module.exports=User