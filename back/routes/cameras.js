const Camera = require('../models/camera.model');
const router = require('express').Router();


//Retrieve all Camera info
router.get('/', (req, res) => {

    //Find all Camera schemas in the DB 
    Camera.find()
        .then(cameras => res.json(cameras))
        .catch(err => res.status(400).json('Error: ' + err));

});

//Retrieve all Camera info
router.get('/:id', (req, res) => {

    //Find all Camera schemas in the DB 
    Camera.findById(req.params.id)
        .then(cameras => res.json(cameras))
        .catch(err => res.status(400).json('Error: ' + err));

});








//Add a Camera
router.post('/add', (req,res) => {

    //get new Camera info
    const name = req.body.name;
    const format = req.body.format;
    const company = req.body.company;
    const lens_mount = req.body.lens_mount;

    const price = {
        amazon: req.body.price.amazon,
        b_h: req.body.price.b_h,
        cinestill: req.body.price.cinestill,
        lomography: req.body.price.lomography,

    };

    //Create new Camera
    const newCamera = new Camera ({
        name,
        format,
        company,
        lens_mount,
        price
    });

    //Save new Camera into DB
    newCamera.save()
        .then(() => res.json('Camera added'))
        .catch(err => res.status(400).json('Error: ' + err));

});






//retrieve Camera based on id
router.get('/edit/:id', (req, res) => {
    Camera.findById(req.params.id)
        //Return exercise as a JSON file
        .then(cameras => res.json(cameras))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete Camera from database based on id
router.delete('/:id', (req, res) => {
    Camera.findByIdAndDelete(req.params.id)
        //Return deletion message as a JSON file
        .then(() => res.json('Camera deleted'))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});
















//Update Existing Camera
router.put('/update/:id', (req, res) => {
    Camera.findById(req.params.id)

    .then(Camera => {
        Camera.name = req.body.name;
        Camera.Camera_type = req.body.Camera_type;
        Camera.format = req.body.format;
        Camera.exposures = req.body.exposures
        Camera.company = req.body.company;
        Camera.price = req.body.price;

        Camera.save()
            .then(() => res.json('Camera updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 