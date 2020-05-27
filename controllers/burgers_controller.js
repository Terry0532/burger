const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    let data;
    await burger.selectAll().then(function (res) {
        data = res;
    });
    res.render("index", { burger: data });
})

module.exports = router;