const nodemailer = require("nodemailer");
const env = require("../env");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.user_email,
        pass: env.user_password
    }
})

const mailOptions = {
    from: env.user_email,
    subject: "One Time Password"
}

const sendOtp = async (email) => {
    const otp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    mailOptions.to = email;
    mailOptions.text = `Your OTP is ${otp}`;
    try {
        const response = await transporter.sendMail(mailOptions);
        return {
            otp,
            id: response?.messageId
        }
    } catch (err) {
        return null
    }
}

module.exports = {
    sendOtp
}