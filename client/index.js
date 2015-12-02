var React = require('react');
var ReactDOM = require('react-dom');
var BlogBox = require('./BlogBox');
var GitBox = require('./GitBox');

ReactDOM.render(<BlogBox url="/api/blogs/"/>, document.getElementById('blog-list'));
// ReactDOM.render(<GitBox url="/api/github"/>, document.getElementById('Github'));
