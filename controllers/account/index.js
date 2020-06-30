import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../../models/index";

export default async (req, res) => {
  console.log(req.body);
  const user = await db.User.findOne({ where: { email: req.body.email } });
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
