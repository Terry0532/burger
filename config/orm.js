const connection = require("./connection");

const orm = {
    selectAll: function () {
        const queryString = "SELECT * FROM burger;";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function () {

    },
    updateOne: function () {

    }
};

module.exports = orm;