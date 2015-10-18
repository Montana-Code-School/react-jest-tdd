var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var Animal = require('../model/animal')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

/* GET All Blogs */
  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animals){
      if(err){
        res.send(err);
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  })

  .post(function(req, res){

    mongoose.model('Animal').create({
      type: req.body.type,
      name: req.body.name
    }, function(err, animal){
      if(err){
        res.send("houston we have a problem")
      } else{
        console.log("New animal named " + animal + "created!");
        res.send(animal);
      }
    });
  });

module.exports = router;