import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('MongoDB Atlas server connected')
    } catch (err) {
        console.log(err)
    }
}