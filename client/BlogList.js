var React = require('react');
var AddComment = require('./AddComment');
var moment = require('moment');

var BlogList = React.createClass({
  render: function render() {
    var self = this;
    var blogData = this.props.data.sort(function dateSort(a, b) {
        a.date < b.date ? -1 : a.date > b.date ? 1 : 0}).reverse().map(function blogDataMap(blogEntry) {
      var comments = blogEntry.comments.map(function blogComments(comment) {
        return (
            <div className="comment-box" key={comment._id}>
              <h4>{comment.title}</h4>
              <p>{comment.body}</p>
            </div>
          );
      });
      return (
          <article className="box" key={blogEntry._id}>
            <header><h3>{blogEntry.title}</h3>{moment(blogEntry.date).format('MMM D, YYYY HH:mm')}</header>
            <section>{blogEntry.body}</section>
            <div className="blog-tags">{comments}</div>
            <AddComment blogId={blogEntry._id} onPost={self.props.newData}/>
          </article>
        );
    });

    return (
        <section>
          {blogData}
        </section>
      );
  },
});


module.exports = BlogList;
