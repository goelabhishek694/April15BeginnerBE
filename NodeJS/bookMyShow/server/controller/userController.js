const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
exports.registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists",
        success: false,
      });
    }
    const newUser = new User(req.body);
    await newUser.save();

    return res.json({
      message: "User created successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
        message: err.message,
        success: false
    })
  }
};

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "User does not exist",
          success: false,
        });
      }
      if(password !== user.password){
        return res.status(401).json({
            message: "Invalid Credentials",
            success: false,
          });
      }
      const token = jwt.sign({"userId": user["_id"]},process.env.SECRET_KEY , {expiresIn: "1d"});
      console.log(token);
      return res.json({
        message: "User logged in",
        success: true,
        data: token
        
      });
    } catch (err) {
      res.status(500).json({
          message: err.message,
          success: false
      })
    }
  };

exports.getCurrentUser = async (req, res) => {
  try{
    let userId = req.userId;
    console.log(userId);
    const user = await User.findById(userId);
    return res.json({
      message: "user retrieved successfully",
      success: true,
      data: user
    })
  }catch(err){
    res.status(500).json({
      message: err.message,
      success: false
  })
  }
}

exports.forgetPassword = async (req, res) => {
  try{
    //1. ask for email 
    // 2. check if email is present or not 
    //   if email is not present -> send a response to the user (user not found) 
    // 3. if email is present -> create a basic otp -> send to the email
    // 4. also store the otp -> in userModel 
    // 5. to avoid collison 
    // response -> unique url with the id of the user that will form your uniqe link for reset password 
  }catch(err){

  }
}

exports.resetPassword = async (req, res) => {
  try{
    //1. otp and password from user
    //2. check otp corect or not , should not be expired 
    //3. check if password is correct 
    //4. update your user with new password
  }catch(err){

  }
}
