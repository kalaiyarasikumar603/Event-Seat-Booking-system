const mongoose = require("../db");

const VenueSchema = new mongoose.Schema({
    title: String,
    location: String,
    date: String,
    seats: Number
});

module.exports = mongoose.model("Venue", VenueSchema);