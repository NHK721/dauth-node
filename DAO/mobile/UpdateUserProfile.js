import db from '../../models/index';

const UpdateUser = (req, _id) => {
  try {
    db.User.update(
      {
        name: req.name,
        phone_number: req.phone_number,
        address: req.address,
      },
      {where: {id: _id}},
    );
    return 'Success';
  } catch (e) {
    throw e;
  }
};

export default UpdateUser;
