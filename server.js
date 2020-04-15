
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");

// var port = process.env.PORT || 3000;

// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({extended: false}));


// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

// app.listen(port, function() {
//     console.log("Server listening on: http://localhost:" + port);
// });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

const routes = require('./controllers/burgers_controller');
app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});