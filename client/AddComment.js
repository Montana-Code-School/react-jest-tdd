var React = require('react');

var AddComment = React.createClass({
    handleCommentSubmit: function(e){
        e.preventDefault();
        var body = this.refs.comment.getDOMNode().value;
        var title = this.refs.comment.getDOMNode().value;
        if(!body){
            return;
        }
        var data = ({ title: title, body: body });
        var blogId = this.props.blogId;
        var self = this;
        $.ajax({
            url: '/api/blogs/'+blogId+'/comments',
            dataType: 'json',
            data: data,
            type:'POST',
            success: function(response){
              console.log("posting data!",data, response);
              //document.location='/blog'
              if(self.props.onPost){
                self.props.onPost()
              }
            }.bind(this),
            error: function(xhr, status, err){
              console.log("not posting data!");
              console.error( status, err.toString());
            }.bind(this)
        })
        this.refs.comment.getDOMNode().value = ''
        
    },
    render: function() {
      return (
        <div className='box'>
          <form>
              <div className="form-group">
                <button onClick={this.handleCommentSubmit.bind(this)} type="submit" className="btn btn-default">Add a comment</button>
                <input type="text" className="form-control" ref="title" placeholder="comment title"/>
                <input type="text" className="form-control" ref="comment" placeholder="comment text"/>
              </div>
          </form>
        </div>
          );
    }
});

module.exports = AddComment;