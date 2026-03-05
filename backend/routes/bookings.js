const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create booking
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

// Get bookings for venue
router.get("/:venueId", async (req, res) => {
  const bookings = await Booking.find({ venueId: req.params.venueId });
  res.json(bookings);
});

// NEW: Get all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// NEW: Cancel ticket
router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket Cancelled" });
});

module.exports = router;