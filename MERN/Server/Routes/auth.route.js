const { Router } = require("express");
const authController = require("../Controllers/auth.controller");
const { Auth } = require("../Middleware/Auth");

const authRoute = Router();

authRoute.post("/", authController.handleSignup);
authRoute.get("/", Auth, authController.handleLogin) // Route level middleware, Route chaining

module.exports = authRoute;