const userRouter = require("express").Router();
const { registerUser, loginUser, getCurrentUser } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", authMiddleware, getCurrentUser);
userRouter.patch('/forgetPassword', forgetPassword);
userRouter.patch('/resetPassword', resetPassword);


module.exports = userRouter;