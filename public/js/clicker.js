function Clicker() {
	this.count = 0;
	this.click = function() {
		this.count++
	}
}

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