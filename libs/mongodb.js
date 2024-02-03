import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("成功連結mongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
