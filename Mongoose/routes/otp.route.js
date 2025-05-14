const { Router } = require("express");
const controller = require("../controllers/otp.controller");

const otpRouter = Router();

otpRouter.post("/send", controller.sendMail)

module.exports = otpRouter;