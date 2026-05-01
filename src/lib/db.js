import mongoose from "mongoose";

const dbConnnect=async()=>{

  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully")
  } catch (error) {
    console.log(error);
  }
}

export default dbConnnect;
