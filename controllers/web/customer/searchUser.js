import checkJWT from "../../../utills/CheckedJWT";
import findAllUser from "../../../DAO/web/findAllUser";

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);
    if (result == false) {
      return res.status(401).send({ message: "UNSERVICEABLE TOKEN" });
    }
    const startDate = req.body.startDate || null;
    const endDate = req.body.endDate || null;
    if (startDate == null || endDate == null) {
      return res.status(400).send({ message: "NEED FULL DATE" });
    }
    const data = findAllUser(startDate, endDate);
    Object.keys(data).forEach(({ account, email }) => {
      if (account == null || email == null) {
        return res.status(400).send({ message: "CANT FOUND USER" });
      }
      data.account[1] = "*";
      if (data.account[2]) {
        data.account[2] = "*";
      }
      data.email[1] = "*";
      data.email[2] = "*";
      if (data.email[3] != "@") {
        data.email[3] = "*";
      }
    });
  } catch (err) {
    return res.status(409).send({ message: err });
  }
};
