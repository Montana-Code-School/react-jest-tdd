var React = require('react');
var AddComment = require('./AddComment');

var BlogList = React.createClass({
    render: function() {
      var self = this;
      var blogData = this.props.data.map(function(blogEntry){
        var comments = blogEntry.comments.map(function(comment){
          return (
            <div className="comment-box">
              <h4>{comment.title}</h4>
              <p>{comment.body}</p>
            </div>
            )
        });
        return (
          <article className="box">
            <header><h3>{blogEntry.title}</h3></header>
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
    }
});


module.exports = BlogList;