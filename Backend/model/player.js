const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Player", playerSchema);
