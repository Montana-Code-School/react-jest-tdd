var React = require('react');
var BlogBox = require('./BlogBox');
var BlogList = require('./BlogList');
var GitBox = require('./GitBox');

React.render(<BlogBox url='/api/blogs/'/>, document.getElementById('blog-list'));
React.render(<GitBox url='/api/github'/>, document.getElementById('Github'));