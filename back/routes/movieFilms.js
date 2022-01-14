const movieFilm = require('../models/moviefilm.model');
const router = require('express').Router();


//Retrieve all movie film info
router.get('/', (req, res) => {

    //Find all movie film schemas in the DB 
    movieFilm.find()
        .then(movie_films => res.json(movie_films))
        .catch(err => res.status(400).json('Error: ' + err));

});

//Retrieve all movie film info
router.get('/:id', (req, res) => {

    //Find all movie film schemas in the DB 
    movieFilm.findById(req.params.id)
        .then(movie_films => res.json(movie_films))
        .catch(err => res.status(400).json('Error: ' + err));

});








//Add a movie film
router.post('/add', (req,res) => {

    //get new movie film info
    const name = req.body.name;
    const film_type = req.body.film_type;
    const iso = req.body.iso;
    const format = req.body.format;
    const feet = req.body.feet;
    const company = req.body.company;

    const price = {
        amazon: req.body.price.amazon,
        b_h: req.body.price.b_h,
        cinestill: req.body.price.cinestill,
        lomography: req.body.price.lomography,

    };

    //Create new movie film
    const newMovieFilm = new movieFilm ({
        name,
        film_type,
        iso,
        format,
        feet,
        company,
        price
    });

    //Save new movie film into DB
    newMovieFilm.save()
        .then(() => res.json('movie film added'))
        .catch(err => res.status(400).json('Error: ' + err));

});






//retrieve movie film based on id
router.get('/edit/:id', (req, res) => {
    movieFilm.findById(req.params.id)
        //Return exercise as a JSON file
        .then(movie_films => res.json(movie_films))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete movie film from database based on id
router.delete('/:id', (req, res) => {
    movieFilm.findByIdAndDelete(req.params.id)
        //Return deletion message as a JSON file
        .then(() => res.json('movie film deleted'))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});
















//Update Existing movie film
router.put('/update/:id', (req, res) => {
    movieFilm.findById(req.params.id)

    .then(movie_film => {
        movie_film.name = req.body.name;
        movie_film.film_type = req.body.film_type;
        movie_film.iso = req.body.iso;
        movie_film.format = req.body.format;
        movie_film.feet = req.body.feet;
        movie_film.company = req.body.company;
        movie_film.price = req.body.price;

        movie_film.save()
            .then(() => res.json('movie film updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 