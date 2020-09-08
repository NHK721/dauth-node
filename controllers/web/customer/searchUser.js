import checkJWT from '../../../utills/CheckedJWT';
import findAllUser from '../../../DAO/web/findAllUser';

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);
    if (result === false) {
      return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    }
    const name = req.body.name || null;
    const startDate = req.body.startDate || null;
    const endDate = req.body.endDate || null;
    if (!startDate || !endDate) {
      return res.status(400).send({message: 'NEED FULL DATE'});
    }
    const users = await findAllUser(startDate, endDate, name);
    const data = {users};
    for (let i = 0; i < data.users.length; i++) {
      const {name} = data.users[i];
      const {email} = data.users[i];
      data.users[i].name = `${name[0]}**`;
      data.users[i].email = `${email[0]}***@****.com`;
    }
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(409).send({message: 'ERROR'});
  }
};
