import db from "../../models/index";

const findOneUser = (req) => {
  try {
    return db.User.findOne({
      where: { email: req.email },
    });
  } catch (e) {
    throw e;
  }
};

export default findOneUser;