import db from "../../models/index";

const findAllUser = (start, end) => {
  try {
    console.log(start);
    console.log(end);
    return db.User.findAll({
      attributes: ["id", "name", "email", "createdAt"],
      where: { createdAt: { [db.Sequelize.Op.between]: [start, end] } },
    });
  } catch (e) {
    console.log("에러", e);
  }
};

export default findAllUser;
