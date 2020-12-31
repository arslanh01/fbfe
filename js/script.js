function validate(){
	var firstname = document.getElementById('fn');
	var lastname = document.getElementById('sn');
	var number = document.getElementById('num');
	var password = document.getElementById('upw');
	
	if(firstname.value === ""){
		firstname.focus();
		return false;
	}
	if(lastname.value===""){
		lastname.focus();
		return false;
	}
	if(number.value===""){
		number.focus();
		return false;
	}
	if(password.value===""){
		password.focus();
		return false;
	}
}
document.getElementById('signup').addEventListener("click",checkFields);
document.getElementById('fn').addEventListener("focus",function(){
	this.style.borderColor = "#ccd0d5";
	if(this.classList.contains('ex')){
		document.getElementById('fntip').style.visibility = 'visible';
	}
	this.classList.remove("ex");
});
document.getElementById('sn').addEventListener("focus",function(){
	this.style.borderColor = "#ccd0d5";
	if(this.classList.contains('ex')){
		document.getElementById('sntip').style.visibility = 'visible';
	}
	this.classList.remove("ex");
});
document.getElementById('num').addEventListener("focus",function(){
	this.style.borderColor = "#ccd0d5";
	if(this.classList.contains('ex')){
		document.getElementById('numtip').style.visibility = 'visible';
		document.getElementById('numtip').style.width = '350px';
	}
	this.classList.remove("ex");
});
document.getElementById('upw').addEventListener("focus",function(){
	this.style.borderColor = "#ccd0d5";
	if(this.classList.contains('ex')){
		document.getElementById('pwtip').style.visibility = 'visible';
		document.getElementById('pwtip').style.width = '350px';
	}
	this.classList.remove("ex");
});
function checkFields(){
	var form = document.forms["Reg"].elements;
	for(var i = 0; i<4 ; i++){
		if(form[i].value === ""){
			form[i].style.borderColor = "red";
			form[i].classList.add("ex");
		}
		}
		if(!(document.getElementById('male').checked) && !(document.getElementById('female').checked) && !(document.getElementById('custom').checked)){
			document.getElementById('gender').style.borderColor = "red";
		}
		else{
			document.getElementById('gender').style.borderColor = "transparent";			
		}
}
document.getElementById('fn').addEventListener("blur",function(){
	if(this.value===""){
		this.style.borderColor = "red";
		this.classList.add("ex");
	}
	else{
		this.style.borderColor = "#ccd0d5";
	}
	document.getElementById('fntip').style.visibility = 'hidden';

});
document.getElementById('sn').addEventListener("blur",function(){
	if(this.value===""){
		this.style.borderColor = "red";
		this.classList.add("ex");
	}
	else{
		this.style.borderColor = "#ccd0d5";
	}
	document.getElementById('sntip').style.visibility = 'hidden';
});
document.getElementById('num').addEventListener("blur",function(){
	if(this.value===""){
		this.style.borderColor = "red";
		this.classList.add("ex");
	}
	else{
		this.style.borderColor = "#ccd0d5";
	}
	document.getElementById('numtip').style.visibility = 'hidden';
});
document.getElementById('upw').addEventListener("blur",function(){
	if(this.value===""){
		this.style.borderColor = "red";
		this.classList.add("ex");
	}
	else{
		this.style.borderColor = "#ccd0d5";
	}
	document.getElementById('pwtip').style.visibility = 'hidden';
});