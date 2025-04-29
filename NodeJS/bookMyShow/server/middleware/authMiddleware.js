const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
    try{
        console.log("i am called");
        const token = req.headers.authorization.split(" ")[1];
        const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = verifiedToken.userId;
        console.log("auth Middleware", verifiedToken);
        next();
    }catch(err){
        res.status(401).send({
            "success": false,
            "message": "Token Invalid"
        })
    }
}