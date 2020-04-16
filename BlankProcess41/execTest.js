function(e){
	//1. Below statement works fine
	document.getElementById('myTestHref').click();

	//2. Below statements donot work
	var eleBody=document.body;
	eleBody.myFunc();

	//3. Below statement also donot work
	myFunc();
}

