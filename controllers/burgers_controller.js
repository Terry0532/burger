const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

//serve index.handlebars to the root route
router.get("/", async function (req, res) {
    let data;
    await burger.selectAll().then(function (res) {
        data = res;
    });
    res.render("index", { burger: data });
})

//post burger name to database
router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.burgerName);
    res.sendStatus(200).end();
})

//update burger to devoured
router.put("/api/burger", function (req, res) {
    burger.updateOne(req.body.burgerId);
    res.sendStatus(200).end();
})

module.exports = router;