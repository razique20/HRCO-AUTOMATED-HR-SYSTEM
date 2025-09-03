import mongoose from 'mongoose';

const dbUrl = process.env.MONGODB_URI;

export const connectDB = async() => {
    await mongoose.connect(dbUrl);
    console.log("DB Connected")
}
