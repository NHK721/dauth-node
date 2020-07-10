import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import findOneAdmin from "../../../DAO/web/findOneAdmin";

export default async (req, res) => {
  const user = await findOneAdmin(req.body);
  if (!user) {
    return res.status(403).send({ message: "User not found" });
  }
  const result = await bcrypt.compare(req.body.password, user.password);
  if (result === true) {
    const token = jwt.sign(req.body, "wecode");
    return res.status(200).send({ Authentication: token });
  } else {
    return res.status(401).send({ message: "incorrect password" });
  }
};
