const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("index", { burger: burger.selectAll() })
})

module.exports = router;