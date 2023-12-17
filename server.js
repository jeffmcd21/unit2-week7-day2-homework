
// Import Epress
const express = require("express")

// Import Morgan
const morgan = require("morgan")

// Import method override
const methodOverride = require("method-override")

// Import the drinks
// Set variable for module.exports
const drinks = require("./models/drinks.js")

// Create app object
const port = express()

// Set GET Route
port.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


// Set Variable for Drinks
port.get("/drinks", (req, res) => {
    //res.send(drinks)
    res.render("index.ejs", {drinks})
})





// Server listener
port.listen(2000, () => {
    console.log("listening on port 2000")
})