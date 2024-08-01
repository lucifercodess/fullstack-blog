import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './config/db.config.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const app = express();

dotenv.config();
app.use(express.json());
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.listen(4009,()=>{
  connectMongo();
  console.log(
    "server is runnning on port 4009"
  )
})