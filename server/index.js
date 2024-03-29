const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const RestaurantModel = require("./models/Restaurants");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://restaurantradar:restaurantradar@cluster0.twyqru6.mongodb.net/restaurantradar?retryWrites=true&w=majority&appName=Cluster0"
  );

  app.get("/getUsers", (req, res) => {
    UserModel.find({}).exec()
        .then(result => {
            if (result.length === 0) {
                res.status(404).json({ message: "No users found" });
            } else {
                res.status(200).json(result);
            }
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
  
    res.json(user);
  });

app.listen(3001, () => {
    console.log("SERVER RUNS!");
  });

  app.get("/getRestaurants", (req, res) => {
    RestaurantModel.find({}).exec()
        .then(result => {
            if (result.length === 0) {
                res.status(404).json({ message: "No restaurants found" });
            } else {
                res.status(200).json(result);
            }
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});