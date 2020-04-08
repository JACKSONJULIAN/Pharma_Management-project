function validate(){
var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
	if(user.trim()==""||pass.trim()==""){
		
		document.getElementById("message").innerHTML="fill both fields-invalid entry!!";
		return false;
	}
	else{
		return true;
	}
}