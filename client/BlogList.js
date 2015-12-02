import React from 'react';
import AddComment from './AddComment';
import moment from 'moment';
import md5 from 'MD5';
var GRAVATAR_URL = 'http://gravatar.com/avatar';

class BlogList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewComments: false,
      user: []
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    $.ajax({
      url: '/api/blogs/user',
      dataType: 'json',
      cache: false,
      success: function(user) {
        console.log('USER IN AJAX', user);
        this.setState({user: user});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  render() {
    var self = this;
    var user;

    if (this.state.user.local) {
      user = this.state.user.local.username;
    } else {
      user = 'NO USER SIGNED IN';
    }

    var blogData = this.props.data.sort(function dateSort(a, b) {
      if (a.date === b.date) {
        return 0;
      } else {
        return a.date < b.date ? -1 : 1;
      }
    }).reverse().map(function blogDataMap(blogEntry) {
      var comments = blogEntry.comments.map(function blogComments(comment) {
        var commentUser;
        var gravUrl;

        if (comment.user && comment.user.local) {
          commentUser = comment.user.local.username;
          var size = 36;
          var email = comment.user.local.email;
          var hash = md5(email);
          gravUrl = GRAVATAR_URL + '/' + hash + '?s=' + size;
        } else {
          commentUser = 'anonymous';
          gravUrl = 'http://www.ipillion.com/images/gravatar.png';
        }

        return (
          <div className="comment-box" key={comment._id}>
            <p><img src={gravUrl}/> - {commentUser} - {comment.body}</p>
          </div>
        );
      });

      var endResult;

      if (user === 'NO USER SIGNED IN') {
        endResult = (
          <article className="box" key={blogEntry._id}>
            <header><h3>{blogEntry.title}</h3>{moment(blogEntry.date).format('MMM D, YYYY HH:mm')}</header>
            <section>{blogEntry.body}</section>
            <div className="blog-tags">{comments}</div>
            <p><a href="/login">log in</a> to post a comment.</p>
          </article>
        );
      } else {
        endResult = (
          <article className="box" key={blogEntry._id}>
            <header><h3>{blogEntry.title}</h3>{moment(blogEntry.date).format('MMM D, YYYY HH:mm')}</header>
            <section>{blogEntry.body}</section>
            <div className="blog-tags">{comments}</div>
            <AddComment blogId={blogEntry._id} onPost={self.props.newData}/>
          </article>
        );
      }
      return endResult;
    });

    return (
      <section>
        {blogData}
      </section>
    );
  }
}


module.exports = BlogList;
