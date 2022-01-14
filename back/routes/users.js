const User = require('../models/user.model');
const router = require('express').Router();


//Retrieve all User info
router.get('/', (req, res) => {

    //Find all User schemas in the DB 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

//Retrieve all User info
router.get('/:id', (req, res) => {

    //Find all User schemas in the DB 
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});







//Add a User
router.post('/add', (req,res) => {

    //get new User info
    const username = req.body.username;
    const password = req.body.password;
    

    //Create new User
    const newUser = new User ({
        username,
        password
    });

    //Save new User into DB
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));

});





/*
//retrieve User based on id
router.get('/edit/:id', (req, res) => {
    User.findById(req.params.id)
        //Return exercise as a JSON file
        .then(users => res.json(users))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});*/


//delete User from database based on id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        //Return deletion message as a JSON file
        .then(() => res.json('User deleted'))
        //Otherwise, return status 400 Error
        .catch(err => res.status(400).json('Error: ' + err));

});



















//Update Existing User
router.put('/update/:id', (req, res) => {
    User.findById(req.params.id)

    .then(User => {
        User.name = req.body.name;
        User.User_type = req.body.User_type;
        User.format = req.body.format;
        User.exposures = req.body.exposures
        User.company = req.body.company;
        User.price = req.body.price;

        User.save()
            .then(() => res.json('User updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 