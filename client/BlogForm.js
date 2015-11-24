var React = require('react');

var BlogForm = React.createClass({

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var title = this.refs.title.value;
    var body = this.refs.body.value;
    if (!title) {
      return;
    }
    var data = ({title: title, body: body});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      data: data,
      type: 'POST',
      success: function(data) {
        console.log('posting data!' + data);
        document.location = '/index.html';
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('not posting data!');
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
      React.findDOMNode(this.refs.title);
  },

  render: function render() {
     return (
              <div>
               <form>
                   <div className="form-group">
                       <label >Title</label>
                       <input type="text" className="form-control" ref="title" placeholder="title"/>
                   </div>
                   <div className="form-group">
                       <label>Post</label>
                       <textarea rows="15" className="form-control" ref="body" placeholder="body"></textarea>
                   </div>
                   <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Submit</button>
               </form>
              </div>
           );
   }
});

module.exports = BlogForm;
