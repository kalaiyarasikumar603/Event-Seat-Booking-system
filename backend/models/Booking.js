const mongoose = require("../db");

const BookingSchema = new mongoose.Schema({
    userId: String,
    venueId: String,
    seatNumber: Number
});

module.exports = mongoose.model("Booking", BookingSchema);