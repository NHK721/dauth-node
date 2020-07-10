import jwt from 'jsonwebtoken';

export default (req) => {
  try {
    const token = req.authentication;
    const decoded = jwt.verify(token, 'wecode');
    return decoded;
  } catch (e) {
    return false;
  }
};
