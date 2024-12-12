const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const slashCommands = require('./slashCommands')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/slash', slashCommands)
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;