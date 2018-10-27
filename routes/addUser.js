var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var url = 'mongodb://localhost:27017';



//Process POST request
router.post("/", function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        var db = client.db('wefour_data')
        var users = db.collection('users');
        var user = {
            login: req.body.login,
            password: req.body.password
        }
        users.insertOne(user, function(err, result){
            if (err) {
                console.log(err);
                return;
            }
            res.send(result.ops);
            client.close();
        })
    })
})

module.exports = router;

