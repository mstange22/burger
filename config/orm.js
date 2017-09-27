connection = require("./connection");

ORM = {

    selectAll: function (tableName, callback) {

        var queryString = "SELECT * FROM " + tableName;

        connection.query(queryString, function (err, data) {

            if (err) {

                throw err;
                console.log(err);
            }

            else {
                callback(data);
            }
        });
    },

    insertOne: function (tableName, column, value, callback) {

        var queryString = "INSERT INTO " + tableName + " (" + column + ") VALUES (\"" + value + "\")";

        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
                console.log(err);
            }

            else {
                callback();
            }

        });
    },

    updateOne: function (tableName, column, value, condition, callback) {

        var queryString = "UPDATE " + tableName + "  SET " + column + "=" + value + " WHERE " + condition;

        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
                console.log(err);
            }

            else {
                callback();
            }
        });
    },

    updateAll: function (tableName, column, value, callback) {

        var queryString = "UPDATE " + tableName + "  SET " + column + "=" + value;

        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
                console.log(err);
            }

            else {
                callback();
            }
        });
    },

    deleteOne: function (tableName, condition, callback) {

        var queryString = "DELETE FROM " + tableName + "  WHERE " + condition;

        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
                console.log(err);
            }

            else {
                callback();
            }
        });
    }
}

module.exports = ORM;