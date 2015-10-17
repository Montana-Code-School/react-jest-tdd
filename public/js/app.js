var clicker = new Clicker();

var clickIt = function() {
	clicker.click();
	showMe();
}
var showMe = function() {
	document.getElementById("clickCountId").innerHTML = clicker.count.toString();
}
showMe();