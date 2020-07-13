import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import findOneUser from '../../../DAO/mobile/findOneUser';

export default async (req, res) => {
  const user = await findOneUser(req.body);
  if (!user) {
    return res.status(403).send({message: 'User not found'});
  }
  const result = await bcrypt.compare(req.body.password, user.password);
  if (result) {
    const token = jwt.sign(req.body, 'wecode');
    return res.status(200).send({Authentication: token});
  }
  return res.status(401).send({message: 'incorrect password'});
};
