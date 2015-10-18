var clicker = new Clicker();

var clickIt = function() {
	clicker.click();
	showMe();
}
var showMe = function() {
	document.getElementById("clickCountId").innerHTML = clicker.count.toString();
}
showMe();


//This should make a request to your animals api, and append each item
//to the HTML id list
(function(){
$.getJSON( "https://guarded-everglades-3990.herokuapp.com/api/blog", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    items.push( "<article><header><h2>" + val.title 
    	+ "</h2></header><section class=\"article-body\">" + val.body +"</section></article>" );
  });
  $( "<section/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#blog-list" );
});
})();
