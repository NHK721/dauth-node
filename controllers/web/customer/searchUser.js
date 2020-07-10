import checkJWT from "../../../utills/CheckedJWT";
import findAllUser from "../../../DAO/web/findAllUser";

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);
    if (result === false) {
      return res.status(401).send({ message: "UNSERVICEABLE TOKEN" });
    }
    const startDate = req.body.startDate || null;
    const endDate = req.body.endDate || null;
    if (startDate == null || endDate == null) {
      return res.status(400).send({ message: "NEED FULL DATE" });
    }
    const users = await findAllUser(startDate, endDate);
    let data = { users };
    for (let i = 0; i < data.users.length; i++) {
      let name = data.users[i].name;
      let email = data.users[i].email;
      data.users[i].name = name[0] + "**";
      data.users[i].email = email[0] + "***@****.com";
    }
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(409).send({ message: "ERROR" });
  }
};
