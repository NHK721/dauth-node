import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import findOneAdmin from "../../../DAO/web/login";

export default async (req, res) => {
  const user = findOneAdmin(req.body);
  console.log(user);
  if (user == null) {
    return res.status(403).send({ message: "User not found" });
  }
  bcrypt.compare(req.body.password, user.password).then(function (result) {
    if (result == true) {
      const token = jwt.sign(req.body, "wecode");
      res.status(200).send(token);
    }
  });
};
