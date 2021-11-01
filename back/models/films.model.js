const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema ({
    name: String,
    film_type: String,
    iso: Number,
    format: String,
    exposures: Number,
    company: String,
    quantity: Number,
    price: {
        amazon: Number,
        b_h: Number,
        cinestill: Number,
        lomography: Number
    },
}, {
    timestamps: true,
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film; 