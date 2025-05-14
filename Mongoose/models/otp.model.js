const { Schema, model } = require("mongoose");

const schema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "OTP already sent to this email"],
    },
    otp: {
        type: Number,
        required: [true, "OTP is required"]
    }
}, {
    timestamps: true
})

const OtpModel = model("otps", schema)

module.exports = OtpModel