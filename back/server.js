const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const filmsRouter = require('./routes/films');
const cameraRouter = require('./routes/cameras');
const movieFilm = require('./routes/movieFilms');
const userRouter = require('./routes/users')

//Have enviroment variables in a .env file
require('dotenv').config();

//Create Express Server 
const app = express();
//Create middleware 
app.use(cors());
app.use(express.json()); //Parse JSON


const port = process.env.PORT || 3000;



const uri = process.env.SHUTTER_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("connected to shutter database.");
})


app.use('/film', filmsRouter);
app.use('/camera', cameraRouter);
app.use('/movie-film', movieFilm);
app.use('/users', userRouter); 







app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})