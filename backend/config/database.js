import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dayline:dayline082901s@dayline-cluster.e4vzi5w.mongodb.net/?retryWrites=true&w=majority&appName=dayline-cluster');
        console.log('DB connected successfully');
    } catch (error) {
        console.error('DB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
}