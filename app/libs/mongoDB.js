import mongoose from "mongoose";
/*// 引入 dotenv 庫
import dotenv from "dotenv";

// 加載 .env 文件中的變數到 process.env
dotenv.config();*/

//const connectMongoDB = async() => {
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("成功連結mongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
