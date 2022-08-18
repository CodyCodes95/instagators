import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    }
    catch (err) {
        console.log(`ERROR: ${err}`)
    }
}

export default connectMongo

