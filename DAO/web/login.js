import db from "../../models/index";

const findOneAdmin = async (req) => {
  try {
    console.log(req);
    const sult = await db.Admin.findOne({
      where: { email: req.email },
    });
    return sult;
  } catch (e) {
    console.log(e);
  }
};

export default findOneAdmin;
