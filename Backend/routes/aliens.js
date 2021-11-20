const express = require("express");
const router = express.Router();
const Player = require("../model/player");

router.get("/", async (req, res) => {
  console.log("Home");
  try {
    const player = await Player.find();
    res.json(player);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { name, sport, category } = req.body;
  console.log(name, sport, category);
  const player = new Player({
    name: name,
    sport: sport,
    category: category,
  });

  try {
    const p1 = await player.save();
    res.json(p1);
  } catch (error) {
    console.log(error);
  }
});
router.get("/about", (req, res) => {
  res.send("about");
  console.log("Get about request");
});

module.exports = router;
