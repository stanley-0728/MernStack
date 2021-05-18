const User = require('../model/user');
const ErrorResponse = require('../utils/errorResponse');
const LoginInput = require("../validator/login");
const SignupInput=require('../validator/register');
exports.register= async (req,res,next) => {

  const {errors, isValid} = SignupInput(req.body);

    if (!isValid) {
       return res.status(400).json(errors);
    }
    const {email,password} = req.body;
    try {
        const user = await User.create({
            email,
            password
        });
       sendToken(user, 200, res);
    }
    catch (error) {
        next(error)
    }
};
exports.login = async (req,res,next) => {
  const {errors, isValid} = LoginInput(req.body);

    if (!isValid) {
       return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        return next(new ErrorResponse("Invalid Credentails", 400));

      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse("Invalid Credentails", 400));
      }
      sendToken(user, 200, res);
  
    } catch (error) {
            next(error)
    }
};


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token});
  };