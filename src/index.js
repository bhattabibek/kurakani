import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";


dotenv.config(); 
import authRoutes from "../routes/auth.route.js"
import connectDB from '../lib/db.js';


const app = express ();
app.use(cookieParser());

app.use(express.json())

app.use("/api/auth",authRoutes);
const PORT = process.env.PORT;
app.listen (PORT,()=>{
  console.log(`server is running on port ${PORT}` )
  connectDB();
})