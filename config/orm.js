const connection = require("./connection");

const orm = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM burger;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },
    insertOne: function (burgerName) {
        const queryString = "INSERT INTO burger (burger_name, devoured) VALUES (?, 0);";
        connection.query(queryString, burgerName);
    },
    updateOne: function () {

    }
};

module.exports = orm;