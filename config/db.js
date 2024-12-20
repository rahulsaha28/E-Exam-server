// import lib
import dotEnv from "dotenv";
import mongoose from "mongoose";

dotEnv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Mongodb connection error");
    // exit the process with failure
    process.exit(1);
  }
};
