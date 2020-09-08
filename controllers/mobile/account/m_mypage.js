import checkJWT from '../../../utills/CheckedJWT';
import UpdateUser from '../../../DAO/mobile/UpdateUserProfile';

export default async (req, res) => {
  try {
    const token = checkJWT(req.headers);
    if (token === false) {
      return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    }
    const _id = token.user_id;
    const profile = await UpdateUser(req.body, _id);
    if (profile === 'Success') {
      return res.status(200).send('Success');
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({message: 'ERROR'});
  }
};
