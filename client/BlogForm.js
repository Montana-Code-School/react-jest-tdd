import React from 'react';

class BlogForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  loadUser() {
    $.ajax({
      url: '/api/blogs/user',
      dataType: 'json',
      cache: false,
      success: function(user) {
        console.log("USER IN AJAX", user);
        this.setState({user: user});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount(){
    this.loadUser();
  }

  handleSubmit(e) {
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
  }

  render() {
    var user;

    if (this.state.user.local) {
      user = this.state.user.local.username
    } else {
      user = "NO USER SIGNED IN"
    }

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
};

module.exports = BlogForm;
