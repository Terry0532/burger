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
        connection.query(queryString, burgerName, function (err) {
            if (err) throw err;
        });
    },
    updateOne: function (burgerId) {
        const queryString = "UPDATE burger SET devoured = 1 WHERE id = ?;";
        connection.query(queryString, burgerId, function (err) {
            if (err) throw err;
        })
    }
};

module.exports = orm;