const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const apiHandler = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiHandler)
app.get("/", (req, res) => res.send("Server running"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;