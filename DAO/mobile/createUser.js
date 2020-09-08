import db from '../../models/index';

const createUser = (req, hash) => {
  try {
    db.User.create({
      account: req.account,
      password: hash,
      name: req.name,
      phone_number: req.phone_number,
      birthday: req.birthday,
      address: req.address,
    });
    return 'Success';
  } catch (e) {
    return 'Fail';
  }
};

export default createUser;
