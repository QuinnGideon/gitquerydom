
$(document).ready(function(){ 

// to check outside of scope, assign the function to a variable name (no var)

// function below will check user email 

function validate() {
			var x = $('#username').val()
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        //var address = document.getElementById[email].value;
        if (reg.test(x) == true) 
        	return true
};

// function below will check password 
function passCheck(){
		if ($('#password').val()=== "12345"){
			return true
		} else {
			return false 
		}
	};


// function below will spilt date by '/' so that output looks like this: 
//date = ["07", "15","1992"]

function dateSplit(){ 
	dateArray = $('#date').val().split("/")

	if (dateArray[0] <=12 && dateArray[1]<=31 && dateArray[2].length===4){
		return true; 
	} else{
		return false;
	
	}
};


// function right below format to check the date format 

function rightFormat(){
	dateFormatArray = $('#date').val().split("")

	if (dateFormatArray.length !== 10 || dateFormatArray[2] !== '/' || dateFormatArray[5] !== '/') {
		return false;
	} else {
		return true;
	}
};


function submitCheck(){
	$('form').submit(function(){
	//alert("I've been clicked")
	if (validate()===true && dateSplit() === true && rightFormat() ===true && passCheck()===true){
		alert('logging in soon')
	} else if (validate()===true && passCheck()===false && rightFormat()===true && dateSplit()===true){
		alert("WRONG PASSWORD! 2 more tries before self combustion")
	} else if (rightFormat()===false && dateSplit()===false && passCheck()===true){
		alert ("date format must be in mm/dd/yyyy")
	} else if (dateSplit() === false && passCheck()===true && rightFormat()===true){
		alert('Invalid date!')
	} else {
		alert ("one or more inputs is incorrect, please try again!")
	}
})
};

submitCheck()

})



