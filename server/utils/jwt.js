import jwt from 'jsonwebtoken';

// const payload = {
//   name: 'ritesh',
//   id: 432432432,
// };

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_STRING, { expiresIn: '1h' });
}

export default generateToken;
