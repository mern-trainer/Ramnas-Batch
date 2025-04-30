const jwt = require("jsonwebtoken")
require("dotenv").config()

const Auth = (request, response, next) => {
    try {
        const bearerToken = request.headers?.authorization;
        if (!bearerToken) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
        const [_, token] = bearerToken.split(" ");
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            if (decoded) {
                return next();
            }
            return response.status(401).send({
                message: "Unauthorized"
            })
        } catch (err) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Something went wrong"
        })   
    }
}

module.exports = {
    Auth
}