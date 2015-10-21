var clicker = new Clicker();

var clickIt = function() {
	clicker.click();
	showMe();
};

var showMe = function() {
	document.getElementById("clickCountId").innerHTML = clicker.count.toString();
};

var BlogList = React.createClass({
    render: function() {
      
      var blogData = this.props.data.map(function(blogEntry){
        return (
        	<article>
        		<header><h3>{blogEntry.title}</h3></header>
        		<section>{blogEntry.body}</section>
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

React.render(<BlogBox url="/api/blogs/"/>, document.getElementById('blog-list'));

$(window).load(function() {
	showMe();
});
	
// 	$.getJSON( "/api/blogs", function( data ) {
// 		var items = [];
// 		$.each( data, function( key, val ) {
// 			items.push( "<article><header><h2>" + val.title 
// 				+ "</h2></header><section class=\"article-body\">" 
// 				+ val.body +"</section></article>" );
// 		});
// 		$( "<div/>", {
// 			"class": "my-new-list",
// 			html: items.join( "" )
// 		}).appendTo( "#blog-list" );
// 	});
// });



