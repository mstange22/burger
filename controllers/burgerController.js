ORM = require("../config/orm");

var burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/", function (req, res) {

        burger.selectAll(function (data) {

            var uneaten = [];
            var eaten = [];

            for (var i = 0; i < data.length; i++) {

                if (data[i].devoured) {
                    eaten.push(data[i]);
                }

                else {
                    uneaten.push(data[i]);
                }
            }

            res.render("index", { burgers: data, uneatenBurgers: uneaten, eatenBurgers: eaten });
        });
    });

    app.post("/", function (req, res) {

        if (req.body.burger === "") {
            res.redirect("/");
        }

        else {

            burger.insertOne(req.body.burger, function () {

                res.redirect("/");
            });
        }
    });

    app.put("/:id", function (req, res) {

        var condition = "id=" + req.params.id;

        burger.updateOne(condition, function () {
            res.redirect("/");
        });
    });

    app.put("/", function (req, res) {

        burger.reset(function () {

            res.redirect("/");
        })
    });

    app.delete("/", function (req, res) {

        condition = "id=" + req.body.id;

        burger.deleteOne(condition, function () {

            res.redirect("/");
        });
    });
}