const handleV1 = (request, response) => {
    return response.status(200).send({
        message: "Hello from v1 - sample route"
    })
}

module.exports = {
    handleV1,
}