import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    return res.status(500).json({code:0,errorMessage: "error in signup controller"});
  }
}

export const signin = async(req,res)=>{
  const {email,password} = req.body;
  try {
    if(!email || !password ||  email == " " || password == " " ){
      return res.status(400).json({code: 0,errorMessage: "all fields are required"})
    }
    const user = await UserModel.findOne({email});
    if(!user){
      return res.status(401).json({code: 0,errorMessage: "invalid username or password"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({code: 0,errorMessage: "invalid username or password"})
    }
    const token = await jwt.sign({id:user._id},"Ayush",{
     
      expiresIn: '1d'
    })
    const {password:pass,...rest} = user._doc;
    res.cookie('Blog-token',token,{
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 *7,
      secure: false,
    })
    return res.status(200).json({code:1,message: "user logged in successfully",rest})
  } catch (error) {
    console.log(error);
    return res.status(500).json({code:0,errorMessage: "error in signin controller"});
  }
}

export const logout = (req,re)=>{

}