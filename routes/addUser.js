var express = require('express');
var router = express.Router();

//Process POST request
router.post("/", function(req, res){
    res.send(req.body.name);
})

module.exports = router;