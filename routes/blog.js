var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Blog       = require('../model/blog');
router.use(bodyParser.urlencoded({ extended: true }))

var validBlogs = [];

function filterByTitle(obj) {
 if ('title' in obj && typeof(obj.title) === 'string') {
   validBlogs.push(obj);
   return true;
  } else {
   return false;
  }
};

router.route('/')/* GET All Blogs */
  .get(function(req, res) {
    mongoose.model('Blog').find({}, function(err, blogs){
     if(err){
       return console.log(err);
     } else {
       var arrByTitle = blogs.filter(filterByTitle);
       res.json(arrByTitle);
     }
    });
  })

  .post(function(req, res){
    var blog = new Blog();
    blog.title = req.body.title;
    blog.body = req.body.body;
    blog.save(function(err, blog){
      if(err){
        res.send("houston we have a problem")
      } else {
        console.log("New blog named " + blog + "created!");
        res.send(blog);
      }
    })
  });

router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Blog').findById({
      _id: req.params.id
    }, function(err, blog) {
      if (err)
        res.send(err);            
      res.json(blog);
    });
  })

  // update with this id (accessed at PUT http://localhost:8080/api/bears/:id)
  .put(function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
      if (err)
        res.send(err);

      console.log(req.body.title + " : " + req.body.body);
      blog.title = req.body.title;  // update the blog info
      blog.body = req.body.body;

      // save the bear
      blog.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Blog was updated!' });
      });
    });
  })

  // delete with this id (accessed at DELETE http://localhost:8080/api/blogs/:id)
  .delete(function(req, res) {
    mongoose.model('Blog').remove({
      _id: req.params.id
    }, function(err, blog) {
      if (err)
        res.send(err);
      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router; 