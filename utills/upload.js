import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cd) {
      cd(null, "uploads/");
    },
    filename(req, file, cd) {
      const ext = path.extname(file.originalname);
      cd(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;
