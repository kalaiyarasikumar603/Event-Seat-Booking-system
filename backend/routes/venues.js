const express = require("express");
const router = express.Router();
const Venue = require("../models/Venue");

router.get("/", async (req, res) => {
    const venues = await Venue.find();
    res.json(venues);
});

router.post("/", async (req, res) => {
    const venue = new Venue(req.body);
    await venue.save();
    res.json(venue);
});

module.exports = router;