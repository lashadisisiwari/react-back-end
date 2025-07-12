import mongoose from "mongoose";
import dotenv from "dotenv";

// env eken data get krnna
dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL as string;


//async function eka demma ee nisa await key word eka use kra
const DBConnection = async () => {
    try{
        const connection = await mongoose.connect(MONGO_DB_URL);
        return `Successfully connected to MongoDB: ${connection.connection.host}`;
    }catch (error){
        return "Mongo DB connection error:" + error;
    }
}

export default DBConnection;