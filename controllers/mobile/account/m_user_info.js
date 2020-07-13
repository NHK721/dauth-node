const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';
import findOneUser from '../../../DAO/mobile/findOneUser';

const getUserInfo = async (req, res) => {
  try {
    const jwt = req.headers['x-access-token'];
    console.log('jwt => ', jwt);
    const decoded = jwt.verify(jwt, 'wecode');
    return res.status(200).send({'hello': decoded});
  } catch (e) {
    console.log('error => ', e);
    return res.status(500).send({'hello': 'error'});
  }

  // const user = await findOneUser(req.body);
  // if (!user) {
  //   return res.status(403).send({message: 'User not found'});
  // }
  // const result = await bcrypt.compare(req.body.password, user.password);
  // if (result) {
  //   const token = jwt.sign(req.body, 'wecode');
  //   return res.status(200).send({Authentication: token});
  // }
  // return res.status(401).send({message: 'incorrect password'});
};

module.exports.getUserInfo = getUserInfo;