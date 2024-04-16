const jwt =require('jsonwebtoken')

const api_config = require("../config/api.js");

const authenticationVerifier = (req, res, next)=> {

    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, api_config.api.jwt_secret,(err, user)=>{
            if(err) res.status(401).json("Invalid token");
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated");
    }
}

module.exports = { authenticationVerifier };