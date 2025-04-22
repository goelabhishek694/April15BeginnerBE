const userRouter = require("express").Router();
const { registerUser, loginUser } = require("../controller/userController");
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
// userRouter.post("/register", registerUser);


module.exports = userRouter;