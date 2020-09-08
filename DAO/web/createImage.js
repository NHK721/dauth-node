import db from '../../models/index';

export default async (req, imagePath) => {
  try {
    db.Image.create({
      filename: req.filename,
      originalname: req.originalname,
      encoding: req.encoding,
      mimetype: req.mimetype,
      destination: req.destination,
      fieldname: req.fieldname,
      path: imagePath,
      size: req.size,
    });
    return true;
  } catch (err) {
    throw err;
  }
};
