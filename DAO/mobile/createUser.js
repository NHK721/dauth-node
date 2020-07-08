import db from "../../models/index";

const createUser = (req, hash) => {
  try {
    db.User.create({
      email: req.email,
      password: hash,
      account: req.account,
      name: req.name,
      phone_number: req.phone_number,
      birthday: req.birthday,
      avatar_url: req.avatar_url
    });
    return "Success";
  } catch (e) {
    return "Fail";
  }
};

export default createUser;