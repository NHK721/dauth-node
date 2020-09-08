import checkJWT from '../../../utills/CheckedJWT';
import findOneUser from '../../../DAO/mobile/findUserProfile';

export default async (req, res) => {
  try {
    const token = checkJWT(req.headers);
    if (token === false) {
      return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    }
    const _id = token.user_id;
    const profile = await findOneUser(_id);
    return res.status(200).json(profile);
  } catch (err) {
    console.log(err);
    return res.status(400).send({message: 'ERROR'});
  }
};
