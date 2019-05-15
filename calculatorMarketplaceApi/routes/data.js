var response = require('../token');
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    response((data) => {
        res.send(data);
    })
})
module.exports = router;

