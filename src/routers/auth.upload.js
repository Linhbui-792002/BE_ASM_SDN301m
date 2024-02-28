const router = require("express").Router();
const multer = require("multer");
const upload = require("../middlewares/lib/upload");
const APIError = require("../utils/errors");
const Response = require("../utils/response");

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      throw new APIError("Multer error while uploading image !", err);
    } else if (err) {
      throw new APIError("An error occurred while uploading the image !", err);
    } else {
      return new Response(req.savedImages, "Upload successful").success(res);
    }
  });
});

module.exports = router;
