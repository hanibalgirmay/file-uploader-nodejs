import express from "express";
import mutler from "multer";
import {
  createFileUpload,
  getFiles,
  getFilesByID
} from "../controllers/FileUploadController";

// Sync all models that are not 
// already in the database 
// sequelizeConn.sync();

const router = express.Router();

let storage = mutler.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = mutler({ storage: storage, limits: {fileSize: 10000000} });

router.post('/upload', upload.single("image"), createFileUpload),

router.get("/upload", getFiles);

router.get("/upload/:id", getFilesByID);

router.delete("/", () => {
  // Delete FileUploader API
});

export default router;
