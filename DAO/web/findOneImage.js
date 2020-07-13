import db from "../../models/index";

const findOneImage = (path) => {
  try {
    return db.Image.findOne({
      attributes: ["id"],
      where: { path },
    });
  } catch (e) {
    throw e;
  }
};

export default findOneImage;
