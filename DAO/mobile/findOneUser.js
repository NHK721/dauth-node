import db from '../../models/index';

const findOneUser = (req) => {
  try {
    return db.User.findOne({
      where: {account: req.account},
    });
  } catch (e) {
    throw e;
  }
};

export default findOneUser;
