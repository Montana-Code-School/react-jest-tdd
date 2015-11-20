var React = require('react');
var BlogList = require('./BlogList');

var BlogBox = React.createClass({

  getInitialState: function(){
    return {data: []};
  },

  loadBlogFromServer: function() {
    $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("inside success ");
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log("broken url is " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadBlogFromServer();
  },

  render: function() {
    return (
      <BlogList data={this.state.data}/>
    );
  }
});

module.exports = BlogBox;
