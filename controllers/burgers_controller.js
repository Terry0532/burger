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

router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.burgerName);
})

module.exports = router;