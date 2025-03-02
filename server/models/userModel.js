import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    unique : true
  },
  phoneNumber: {
    type: Number,
   
  },
  password: {
    type: String,
    required: true
  },
  avatar : {
    type : String ,
   
  },
  role : {
    type : String ,
    enum : ['user', 'admin'] ,
    default : 'user'
  }

});

const User = mongoose.model('User', userSchema);

export default User;


//node js intro working of nodejs ,architecture

//fs , streams , https , eventemitter ,
//os , epxress , middleware , server , morgan  , authentication and authorization , cors<= , error handling , middleware logger , global error  handling ,nodemailer , multer  , mvc ,   , crud , mongodb crud queries , populate , relation ,