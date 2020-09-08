import db from '../../models/index';

const findOneImage = (imagePath) => {
  try {
    return db.Image.findOne({
      attributes: ['id'],
      where: {path: imagePath},
    });
  } catch (e) {
    throw e;
  }
};

export default findOneImage;
