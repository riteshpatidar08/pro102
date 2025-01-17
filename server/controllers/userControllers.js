import User from './../models/userModel.js';
import generateToken from '../utils/jwt.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, password } = req.body;
  //NOTE check if user exist in database
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(404).json({
      message: 'User is not registred please  register and try again',
    });
  }

  //NOTE if user exist check password
  if (password === user.password) {
    const payload = {
      name: user.name,
      id: user._id,
    };
    //NOTE if password match generate token and send it to response
    const token = generateToken(payload);
    return res.status(200).json({
      message: 'password',
      data: {
        token,
      },
    });
  } else {
    return res.status(400).json({
      message: 'Password do not match',
    });
  }
};

export const register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  const user = await User.findOne({ email });
  console.log(password);
  //check if user already exist
  if (user) {
    return res.status(400).json({
      message: 'User already exists ,Please Login',
    });
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    name,
    email,
    phoneNumber,
    password: hashedPassword,
  };
  console.log(hashedPassword);
  const newUser = await User.create(userData);
  res.status(201).json({
    message: 'User created',
    data: newUser,
  });
};
