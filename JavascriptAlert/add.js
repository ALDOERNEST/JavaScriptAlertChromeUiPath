function() {
	var body = document.getElementsByTagName("body")[0];
	var text = document.createElement("input");
	text.id = "alertOutput";
	body.insertBefore(text, body.firstChild)
};