var ORM = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        ORM.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newName, cb) {
        ORM.insertOne("burgers", "burger_name", newName, function() {
            cb();
        });
    },
    updateOne: function(condition, cb) {
        ORM.updateOne("burgers", "devoured", true, condition, function() {
            cb();
        });
    },
    reset: function(cb) {
        ORM.updateAll("burgers", "devoured", false, function() {
            cb();
        });
    },
    deleteOne: function(condition, cb) {
        ORM.deleteOne("burgers", condition, function() {
            cb();
        });
    }
}

module.exports = burger;