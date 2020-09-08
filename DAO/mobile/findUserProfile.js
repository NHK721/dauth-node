import db from '../../models/index';

const findOneUser = (_id) => {
  try {
    return db.User.findOne({
      where: {id: _id},
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
  } catch (e) {
    throw e;
  }
};

export default findOneUser;
