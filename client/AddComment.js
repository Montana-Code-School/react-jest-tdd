var React = require('react');

var AddComment = React.createClass({

  handleCommentSubmit: function handleCommentSubmit(e) {
    var body = this.refs.comment.value;
    var title = this.refs.title.value;
    var data = ({ title: title, body: body });
    var blogId = this.props.blogId;
    var self = this;
    e.preventDefault();
    if (!body) {
      return;
    }
    $.ajax({
      url: '/api/blogs/' + blogId + '/comments',
      dataType: 'json',
      data: data,
      type: 'POST',
      success: function sucess() {
        // console.log('posting data!', data, response);
        if (self.props.onPost) {
          self.props.onPost();
        }
      },
      error: function error(xhr, status, err) {
        // console.log('not posting data!');
        console.error(status, err.toString());
      },
    });
  },

  render: function render() {
    return (
        <div className="box">
          <form>
              <div className="form-group">
                <button onClick={this.handleCommentSubmit} type="submit" className="btn btn-default">Add a comment</button>
                <input type="text" className="form-control" ref="title" placeholder="comment title"/>
                <input type="text" className="form-control" ref="comment" placeholder="comment text"/>
              </div>
          </form>
        </div>
          );
  },
});

module.exports = AddComment;
