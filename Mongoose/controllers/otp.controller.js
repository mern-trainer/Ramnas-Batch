const { sendOtp } = require("../lib/nodeMailer");

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
        const res = await sendOtp(email);
        if (!res) {
            return response.status(503).send({
                message: "Something went wrong"
            })
        }
        return response.status(200).send({
            message: "OTP sent successfully",
            res
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Internal server error"
        })
    }
}

module.exports = {
    sendMail
}