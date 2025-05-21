const { sendOtp } = require("../lib/nodeMailer");
const OtpModel = require("../models/otp.model");

const sendMail = async (request, response) => {
    try {
        if (!request.body) {
            return response.status(400).send({
                message: "Email is required"
            })
        }
        const { email } = request.body;
        if (!email) {
            return response.status(400).send({
                message: "Email is required"
            })
        }
        const sent = await OtpModel.findOne({ email });
        console.log(sent);
        if (sent) {
            const createdAt = sent.createdAt
            const inSeconds = Math.floor(new Date(createdAt).getTime() / 1000);
            const now = Math.floor(new Date().getTime() / 1000);
            const diff = now - inSeconds;
            console.log(diff);
            if (diff < 60) {
                return response.status(400).send({
                    message: "OTP already sent to this email"
                }) 
            }
            await OtpModel.deleteOne({ email });
        }
        const res = await sendOtp(email);
        if (!res) {
            return response.status(503).send({
                message: "Something went wrong"
            })
        }
        await OtpModel.create({
            email,
            otp: res.otp
        })
        return response.status(200).send({
            message: "OTP sent successfully"
        })
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({
            message: error.message || "Internal server error"
        })
    }
}

const verifyOtp = async (request, response) => {
    try {
        if (!request.body) {
            return response.status(400).send({
                message: "Email and OTP are required"
            })
        }
        const { email, otp } = request.body;
        if(!email || !otp) {
            return response.status(400).send({
                message: "Email and OTP are required"
            })
        }
        const data = await OtpModel.findOne({ email });
        if (!data) {
            return response.status(400).send({
                message: "Send OTP first"
            })
        }
        if (data.otp !== otp) {
            return response.status(400).send({
                message: "Invalid OTP"
            })
        }
        await OtpModel.deleteOne({ email });
        return response.status(200).send({
            message: "OTP verified successfully"
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Internal server error"
        })
    }   
}

module.exports = {
    sendMail,
    verifyOtp
}