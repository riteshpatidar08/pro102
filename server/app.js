import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connection is successfull');
});

// async function addUser(){
//     await User.deleteMany()
//   await User.create([{name:'Ritesh',email:"ritesh@gmail.com",password:'123456',phoneNumber : 54884848484}])

//   const user = await User.find({email : "rith@gmail.com"})
//   console.log(user)
// }
// addUser()

//routes middleware
app.use('/auth', userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT}`);
});

//authentication =>

// email , name , password , phoneNumber
