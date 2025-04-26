const userRouter = require("express").Router();
const { registerUser, loginUser } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
userRouter.post("/register", authMiddleware, registerUser);
userRouter.post("/login", loginUser);
// userRouter.post("/register", registerUser);


module.exports = userRouter;