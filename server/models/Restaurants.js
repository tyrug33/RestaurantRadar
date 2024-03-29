const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  restaurantAddress: {
    type: String,
    required: true,
  },
  restaurantAvgStarRating: {
    type: Number,
    required: true,
  },
});

const RestaurantModel = mongoose.model("restaurants", RestaurantSchema);
module.exports = RestaurantModel;