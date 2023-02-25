const JWT = require("jsonwebtoken");
module.exports = {
    validateToken: (req, res, next) => {
        let token = req.get("authorization");
        // const token = req.body.token || req.query.token || req.headers["x-access-token"];
        token = token?.slice(7); // remove Bearer from string // using optional chaining, if token is undefined, it will return undefined instead of error of undefined.slice()
        if (token) {
            JWT.verify(token,
                // process.env.API_KEY,
                "SampleToken@12345",
                (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        success: 0,
                        message: "Invalid token",
                    });
                } else {
                    req.decoded = decoded;
                    next();
                    } 
                    
            });
        } else {
            return res.status(401).json({
                success: 0,
                message: "Access denied!",
            });
        }
    },

};
