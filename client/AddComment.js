import React from 'react';

class AddComment extends React.Component {

  handleCommentSubmit(e) {
    console.log('handleCommentSubmit!', this.refs.comment.value);
    var body = this.refs.comment.value;
    var data = ({ body: body });
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
  }

  render() {
    return (
        <div className="box">
          <form>
              <div className="form-group">
                <button onClick={this.handleCommentSubmit.bind(this)} type="submit" className="btn btn-default">Add a comment</button>
                <input type="text" className="form-control" ref="comment" placeholder="comment text"/>
              </div>
          </form>
        </div>
          );
  }
};

module.exports = AddComment;
