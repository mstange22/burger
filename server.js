var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var connection = require("./config/connection");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgerController")(app);

app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});