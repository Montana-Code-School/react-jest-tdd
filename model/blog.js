// models/blog.js

var mongoose     = require('mongoose');

var BlogSchema   = new mongoose.Schema({
    title: String,
    body: String,
    date: {type: Date, default: Date.now },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Blog', BlogSchema);