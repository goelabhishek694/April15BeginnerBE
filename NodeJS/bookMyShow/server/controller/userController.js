const User = require("../models/userModel");

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

      return res.json({
        message: "User logged in",
        success: true,
        
      });
    } catch (err) {
      res.status(500).json({
          message: err.message,
          success: false
      })
    }
  };
