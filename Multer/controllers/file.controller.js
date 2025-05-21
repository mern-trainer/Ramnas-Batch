const fileHandler = async (request, response) => {
    try{
        const file = request.file;
    } catch (error) {
        return response.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {fileHandler};