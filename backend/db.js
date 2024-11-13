const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://senmohit9005:8wxbZTl7zfnCwphs@iscrape.b9zta.mongodb.net/";

const connectToMongo = async()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose successfully");
    })

}

module.exports = connectToMongo;