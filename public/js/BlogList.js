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

module.exports = BlogList;