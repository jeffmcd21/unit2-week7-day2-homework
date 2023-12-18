
// Import Epress
const express = require("express")

// Import Morgan
const morgan = require("morgan")

// Import method override
const methodOverride = require("method-override")

// Import the drinks
// Set variable for module.exports
const drinks = require("./models/drinks.js")

// Create port object
const port = express()

// GET Route
port.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


// Index Route
port.get("/drinks", (req, res) => {
    //res.send(drinks)
    res.render("index.ejs", {drinks})
})


// Show Route
port.get("/drinks/:id", (req, res) => {
    // const id = req.params.id 
    // const drink = drinks[id]
    // res.send(drink)
    res.send(req.params.id)
})


// Server listener
port.listen(2000, () => {
    console.log("listening on port 2000")
})