import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const signup = async(req,res)=>{
  const {email,password,username} = req.body;
  try {
    if(!email || !password || !username || username == " " || password == " " || email == " "){
      return res.status(400).json({code: 0,errorMessage: "all fields are required"})
    }

    const hashPassword = await bcrypt.hash(password,10)
    const newUser = await UserModel({
      username,
      email,
      password: hashPassword
    })
    await newUser.save();
    return res.status(200).json({code:1,message: "user created successfully"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({code:0,message: "error in signup controller"});
  }

}