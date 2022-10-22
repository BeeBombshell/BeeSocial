const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hey! Its user route!");
})

module.exports = router;