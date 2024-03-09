import express from "express"
import multer from "multer";
import upload from "../middlewares/lib/upload";
import APIError from "../utils/errors";
import Response from "../utils/response";

const router = express.Router();

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

export default router;
