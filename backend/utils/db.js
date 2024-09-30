
const mongoose = require('mongoose');
const mongoURI = process.env.Mongo; // Replace 'admin' with your actual database name

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Mongoose is Connected");
    } catch (error) {
        
        console.error("Failed to connect to MongoDB", error);
    }
};


module.exports=connectToMongo;
