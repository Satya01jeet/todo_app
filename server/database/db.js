import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.a1kvhsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
    mongoose.connection.on('connected',() => console.log(`Database connected`));
    mongoose.connection.on('disconnected',() => console.log(`Database disconnected`));
    mongoose.connection.on('error',(error) => console.error('Error while connecting to database',error));
}

export default connection;