import db from "../../models/index";

const createAdmin = (req, hash) => {
  try {
    db.Admin.create({
      email: req.email,
      password: hash,
    });
    return "Success";
  } catch (e) {
    return "Fail";
  }
};

export default createAdmin;
