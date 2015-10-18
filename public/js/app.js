var clicker = new Clicker();

var clickIt = function() {
	clicker.click();
	showMe();
}
var showMe = function() {
	document.getElementById("clickCountId").innerHTML = clicker.count.toString();
}


$(window).load(function() {
    showMe();

    //This should make a request to your animals api, and append each item
	//to the HTML id list

	(function(){
		$.getJSON( "http://localhost:3000/api/animals", function( data ) {
			var items = [];
			$.each( data, function( key, val ) {
				items.push( "<li>" + val.name + " the " + val.type +"</li>" );
			});
			$( "<ul/>", {
				"class": "my-new-list",
				html: items.join( "" )
			}).appendTo( "#list" );
		});
	})();
	
	$.getJSON( "https://guarded-everglades-3990.herokuapp.com/api/blog", function( data ) {
	  var items = [];
	  console.log("We're starting to get data from getJSON " + data);

	  $.each( data, function( key, val ) {

	    items.push( "<article><header><h2>" + val.title 
	    	+ "</h2></header><section class=\"article-body\">" + val.body +"</section></article>" );
	  });
	  $( "<div/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( "#blog-list" );
	  console.log("We got data from the getJSON " + items);
	});

	console.log("Well, we got to the end of the window load javascript! ");
});



