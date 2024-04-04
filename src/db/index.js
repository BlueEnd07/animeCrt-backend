import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";


const connectDB = async() => {
  try {
    const connectinst = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`connected to db ${connectinst.connection.host}`);
  } catch(error) {
    console.log("error to connect to database", error);
    process.exit(1);
  }
}
export default connectDB
