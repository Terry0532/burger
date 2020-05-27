const orm = require("../config/orm");

const burger = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll().then(function (res) {
                resolve(res);
            });
        })
    }
};

module.exports = burger;