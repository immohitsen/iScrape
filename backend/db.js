const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iscrape?readPreference=primary&directConnection=true&ssl=false";

const connectToMongo = async()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose successfully");


    })

}

module.exports = connectToMongo;