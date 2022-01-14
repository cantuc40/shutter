const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cameraSchema = new Schema ({
    name: String,
    format: String,
    company: String,
    lens_mount: String,
    price: {
        amazon: Number,
        b_h: Number,
        cinestill: Number,
        lomography: Number,
        ebay: Number
    },
}, {
    timestamps: true,
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera; 