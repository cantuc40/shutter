const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviefilmSchema = new Schema ({
    name: String,
    film_type: String,
    iso: Number,
    format: String,
    feet: Number,
    company: String,
    price: {
        amazon: Number,
        b_h: Number,
        cinestill: Number,
        lomography: Number
    },
}, {
    timestamps: true,
});

const movieFilm = mongoose.model('Movie Film', moviefilmSchema);

module.exports = movieFilm; 