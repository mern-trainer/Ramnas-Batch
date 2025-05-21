const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "assets")
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1]
        const newFileName = crypto.randomUUID() + "." + ext
        console.log(newFileName)
        cb(null, newFileName)
    }
})

const upload = multer({ storage })

module.exports = upload;