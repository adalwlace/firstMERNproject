import mongoose from "mongoose";

const dbUserName = "shreya";
const dbPassword = "shreya1111";
const dbName = "e-mart";
const dbHost = "shreya.68kkqma.mongodb.net";

const connectDB = async () => {
    try {
await mongoose.connect(
    `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=shreya`
  );
  console.log("DB connection established...");
} catch (error) {
  console.log("DB connection failed...");
  console.log(error.message);
}
};

export default connectDB;