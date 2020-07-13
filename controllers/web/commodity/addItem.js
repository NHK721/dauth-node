import checkJWT from "../../../utills/CheckedJWT";
import fs from "fs";
import saveImage from "../../../DAO/web/createImage";
import addItem from "../../../DAO/web/createItem";
import findOneImage from "../../../DAO/web/findOneImage";

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);
    if (result == false) {
      return res.status(401).send({ message: "UNSERVICEABLE TOKEN" });
    }
    fs.readdir("uploads", (err) => {
      if (err) {
        fs.mkdirSync("uploads");
      }
    });

    const imagePath = `/img/${req.file.filename}`;
    const checkSaveSuccess = saveImage(req.file, imagePath);
    if (checkSaveSuccess != true) {
      return res.status(500).send({ message: "FAIL SAVE IMAGE" });
    }
    const imageId = findOneImage(imagePath);
    const checkAddSuccess = addItem(req.body, imageId);
    if (checkAddSuccess != false) {
      return res.status.send({ message: "FAIL ADD ITEM" });
    }
    return res.status.send({ message: "ADD NEW ITEM SUCCESS" });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
