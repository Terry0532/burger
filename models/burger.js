const orm = require("../config/orm");

const burger = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll().then(function (res) {
                resolve(res);
            });
        })
    },
    insertOne: function (burgerName) {
        orm.insertOne(burgerName);
    },
    updateOne: function (burgerId) {
        orm.updateOne(burgerId);
    }
};

module.exports = burger;