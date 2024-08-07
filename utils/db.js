import mongoose from "mongoose";

const connectDB = async () => {
  if (
    mongoose.connections &&
    mongoose.connections.length > 0 &&
    mongoose.connections[0].readyState
  ) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    throw new Error("Error while connecting to MongoDB:", error);
  }
};

export default connectDB;
