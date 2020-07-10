import bcrypt from 'bcrypt';
import findOneUser from '../../../DAO/mobile/findOneUser';
import createUser from '../../../DAO/mobile/createUser';

export default async (req, res) => {
  const user = await findOneUser(req.body);
  const salt = 10;
  if (user) {
    return res.status(400).send({message: 'UNUSABLE VALUE '});
  }
  const hash = await bcrypt.hash(req.body.password, salt);
  const result = createUser(req.body, hash);
  if (result == 'Success') {
    const bip39 = require('bip39');
    const mnemonic = bip39.generateMnemonic();
    return res.status(201).send(`Mnemonic Value: ${mnemonic}`);
  }
  return res.status(500).send('Fail');
};
