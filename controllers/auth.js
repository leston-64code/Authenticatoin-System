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
        res.status(201).json({
            success: true,
            user: user,
        });
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

        return res.status(200).json({
            success: true,
            token: "kajshfflfufhfh",
        });
    } catch (error) {
        // return next(new ErrorResponse("Server Error", 500));
        return next(error)
    }
};

exports.forgotpassword = (req, res, next) => {
    res.send("forgotpassword Route is this");
};

exports.resetpassword = (req, res, next) => {
    res.send(" resetpassword Route is this");
};
