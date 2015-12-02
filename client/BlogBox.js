import React from 'react';
import BlogList from './BlogList';

class BlogBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.loadBlogFromServer();
  }

  loadBlogFromServer() {
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
  }

  render() {
    var self = this;
    var doRefresh = function() {
      self.loadBlogFromServer();
    };
    return (
      <BlogList data={this.state.data} newData={doRefresh}/>
    );
  }
}

module.exports = BlogBox;
