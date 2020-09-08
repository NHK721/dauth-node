import db from '../../models/index';

export default async (req) => {
  try {
    const imageId = db.Image.findOne({
      attributes: ['id'],
      where: {path: req.file.path},
    });

    db.Commodity.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageId: imageId,
    });
  } catch (e) {}
};
