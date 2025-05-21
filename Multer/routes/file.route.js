const { Router } = require("express");
const controller = require("../controllers/file.controller");
const upload = require("../middlewares/multer");

const fileRoute = Router();

fileRoute.post("/upload", upload.single("file"), controller.fileHandler)

module.exports = fileRoute;