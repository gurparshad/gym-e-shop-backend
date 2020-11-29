const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    let token = req.headers['x-access-token'] || req.headers["authorization"];
    // if bearer is there with the token
    let checkBearer = "Bearer";
 

    if(token){
        console.log("===>>>>",token)
        if(token.startsWith(checkBearer)){
            token = token.slice(checkBearer.length+1, token.length);
            console.log(token);
        }

        jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
            if(err){
                res.json({
                    success: false,
                    message: "Failed to authenticate"
                });
            } else {
                req.decoded = decoded; // decoded contains the verified user object.
                next();
            }
        });
    } else {
        res.json({
            success: false,
            message: "No token Provided"
        })
    }
}