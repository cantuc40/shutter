const Film = require('../models/films.model');
const router = require('express').Router();


//Retrieve all film info
router.get('/', (req, res) => {

    //Find all film schemas in the DB 
    Film.find()
        .then(films => res.json(films))
        .catch(err => res.status(400).json('Error: ' + err));

});

//Retrieve all film info
router.get('/:id', (req, res) => {

    //Find all film schemas in the DB 
    Film.findById(req.params.id)
        .then(films => res.json(films))
        .catch(err => res.status(400).json('Error: ' + err));

});








//Add a film
router.post('/add', (req,res) => {
    
    //get new film info
    const name = req.body.name;
    const film_type = req.body.film_type;
    const iso = req.body.iso;
    const format = req.body.format;
    const exposures = req.body.exposures;
    const company = req.body.company;
    const quantity = req.body.quantity;

    const price = {
        amazon: req.body.price.amazon,
        b_h: req.body.price.b_h,
        cinestill: req.body.price.cinestill,
        lomography: req.body.price.lomography,

    };

    //Create new film
    const newFilm = new Film ({
        name,
        film_type,
        iso,
        format,
        exposures,
        company,
        quantity,
        price
    });

    //Save new film into DB
    newFilm.save()
        .then(() => res.json('Film added'))
        .catch(err => res.status(400).json('Error: ' + err));

});






//retrieve film based on id
router.get('/edit/:id', (req, res) => {
    Film.findById(req.params.id)
        //Return exercise as a JSON file
        .then(film => res.json(film))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete film from database based on id
router.delete('/:id', (req, res) => {
    Film.findByIdAndDelete(req.params.id)
        //Return deletion message as a JSON file
        .then(() => res.json('Film deleted'))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});
















//Update Existing film
router.put('/update/:id', (req, res) => {
    Film.findById(req.params.id)

    .then(film => {
        film.name = req.body.name;
        film.film_type = req.body.film_type;
        film.format = req.body.format;
        film.exposures = req.body.exposures
        film.company = req.body.company;
        film.price = req.body.price;

        film.save()
            .then(() => res.json('Film updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 