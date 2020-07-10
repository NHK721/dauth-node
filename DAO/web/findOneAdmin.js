import db from '../../models/index';

const findOneAdmin = (req) => {
  try {
    return db.Admin.findOne({
      where: {email: req.email},
    });
  } catch (e) {
    throw e;
  }
};

export default findOneAdmin;
