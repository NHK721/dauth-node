import checkJWT from '../../../utills/CheckedJWT';
import fs from 'fs';
import saveImage from '../../../DAO/web/createImage';
import addItem from '../../../DAO/web/createItem';
import findOneImage from '../../../DAO/web/findOneImage';

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);
    if (result == false) {
      return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    }
    fs.readdir('uploads', (err) => {
      if (err) {
        fs.mkdirSync('uploads');
      }
    });

    const imagePath = `/img/${req.file.filename}`;
    const checkSaveSuccess = await saveImage(req.file, imagePath);
    if (checkSaveSuccess != true) {
      return res.status(500).send({message: 'FAIL SAVE IMAGE'});
    }
    const imageId = await findOneImage(imagePath);
    const checkAddSuccess = await addItem(req.body, imageId);
    if (checkAddSuccess != true) {
      return res.status.send({message: 'FAIL ADD ITEM'});
    }
    return res.status.send({message: 'ADD NEW ITEM SUCCESS'});
  } catch (err) {
    return res.status(400).send({message: 'err'});
  }
};
