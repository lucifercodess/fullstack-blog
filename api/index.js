import express from 'express';
import dotenv from 'dotenv';

import connectMongo from './config/db.config.js';
const app = express();

dotenv.config();



app.listen(3000,()=>{
  connectMongo();
  console.log(
    "server is runnning on port 3000"
  )
})