import mongoose from "mongoose";

const connectMongo = async()=>{
  const db = await mongoose.connect(process.env.MONGO_URL);
  if(db.connection){
    console.log("database is connected")
  }
  else{
    console.log("error connecting to Mongo");
  }
}

export default connectMongo;