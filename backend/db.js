const mongoose = require('mongoose');

const mongoURI = process.env.URI;

const connectToMongo = async()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose successfully");
    })

}

module.exports = connectToMongo;