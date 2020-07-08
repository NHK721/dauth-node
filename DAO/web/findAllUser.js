import db from "../../models/index";

const findAllUser = (start, end) => {
  try {
    return db.User.findAll({
      where: { createdAt: { between: [start, end] } },
      limit: 20,
      offset: 0,
      order: [["createdAt", "DESC"]],
    });
  } catch (e) {
    throw e;
  }
};

export default findAllUser;
