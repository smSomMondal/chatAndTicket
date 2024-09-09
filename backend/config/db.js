const mongoose = require("mongoose");
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/tourBot");
        console.log(`Mongo DB Connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log(`ERROR : ${error.message}`);
        process.exit;
    }
};
module.exports = connectDB;