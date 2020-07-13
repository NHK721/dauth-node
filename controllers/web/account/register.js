import bcrypt from 'bcrypt';
import findOneAdmin from '../../../DAO/web/findOneAdmin';
import createAdmin from '../../../DAO/web/createAdmin';

export default async (req, res) => {
  const user = await findOneAdmin(req.body);
  const salt = 10;
  if (user) {
    return res.status(400).send({message: 'UNUSABLE VALUE '});
  }
  const hash = await bcrypt.hash(req.body.password, salt);
  const result = createAdmin(req.body, hash);
  if (result === 'Success') {
    return res.status(201).send('Success');
  }
  return res.status(500).send('Fail');
};
