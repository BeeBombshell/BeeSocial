const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hey! Its auth route!");
})

module.exports = router;