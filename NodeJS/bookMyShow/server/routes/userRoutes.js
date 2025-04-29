const userRouter = require("express").Router();
const { registerUser, loginUser, getCurrentUser } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", authMiddleware, getCurrentUser);

// userRouter.post("/register", registerUser);


module.exports = userRouter;