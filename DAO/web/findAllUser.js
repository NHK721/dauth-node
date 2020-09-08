import db from '../../models/index';

const findAllUser = (start, end, name) => {
  try {
    if (name == null && start != null && end != null) {
      console.log(start);
      console.log(end);
      return db.User.findAll({
        attributes: ['id', 'name', 'email', 'createdAt'],
        where: {createdAt: {[db.Sequelize.Op.between]: [start, end]}},
      });
    } else if (start == null && end == null) {
      return db.User.findAll({
        attributes: ['id', 'name', 'email', 'createdAt'],
        where: {name},
      });
    } else if (name != null) {
      return db.User.findAll({
        attributes: ['id', 'name', 'email', 'createdAt'],
        where: {name},
      });
    }
    return db.User.findAll({
      attributes: ['id', 'name', 'email', 'createdAt'],
      where: {createdAt: {[db.Sequelize.Op.between]: [start, end]}},
    });
  } catch (e) {
    console.log('에러', e);
  }
};

export default findAllUser;
