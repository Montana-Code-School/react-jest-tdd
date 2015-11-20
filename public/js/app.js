var clicker = new Clicker();

var clickIt = function() {
	clicker.click();
	showMe();
};

var showMe = function() {
	document.getElementById("clickCountId").innerHTML = clicker.count.toString();
};



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



