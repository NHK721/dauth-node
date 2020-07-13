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
    const name = req.body.name || null;
    const users = await findAllUser(startDate, endDate, name);
    let data = { users };
    for (var i = 0; i < data.users.length; i++) {
      let name = data.users[i].name;
      let email = data.users[i].email;
      data.users[i].name = name[0] + "**" + name[name.length - 1];
      data.users[i].email = email[0] + "***@****.com";
    }
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(409).send({ message: "ERROR" });
  }
};
