var React = require('react');
var BlogList = require('./BlogList');

var BlogBox = React.createClass({

  getInitialState: function getInitialState() {
    return {data: []};
  },

  loadBlogFromServer: function loadBlogFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function success(data) {
        this.setState({data: data});
      }.bind(this),
      error: function error(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  componentDidMount: function componentDidMount() {
    this.loadBlogFromServer();
  },

  render: function render() {
    var self = this;
    var doRefresh = function() {
      self.loadBlogFromServer();
    };
    return (
      <BlogList data={this.state.data} newData={doRefresh}/>
    );
  },
});

module.exports = BlogBox;
