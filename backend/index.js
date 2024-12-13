const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({
  path: '../.env'
});

connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors({
  origin: "https://iscrape.vercel.app",
  credentials: true,
}));
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`iScrape backend listening at http://localhost:${port}`)
})
