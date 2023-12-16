
// Import Epress
const express = require("express")

// Import Morgan
const morgan = require("morgan")

// Import method override
const methodOverride = require("method-override")


// Create app object
const port = express()



port.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})




// Server listener
port.listen(2000, () => {
    console.log("listening on port 2000")
})