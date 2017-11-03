$(document).ready(function(){

	/*
	------------------------------------------------------------------------
	examples of reading/writing to HTML tags with jQuery
	------------------------------------------------------------------------
	*/
	$("#changetext").click(  function (){
		/*
		use .text() to change the text 
		of an element
		original content will get overwritten
		*/		
		$("#message01").text("New text!!!");				
	});
	
	$("#addtext").click( function(){
		/*
		original content does not get overwritten
		when you use .append() to add text 		
		*/
		$("#message01").append("text added...");	
	});
	
	$("#cleartext").click(function(){
		/*
		use .empty() to clear the text in an HTML element
		*/
		$("#message01").empty();	
	});

	/*
	------------------------------------------------------------------------
	examples of reading/writing to HTML forms with jQuery
	------------------------------------------------------------------------
	*/	
	$("#readtext").click(function (){
		/*
		use .val() to acces the value attribute
		of any form input... then store the 
		values in javascript variables
		*/
		$username = $("#username").val();
		$password = $("#password").val();
		//now change the current text of the message...
		$("#message01").text("Username: " + $username + " ");
		//and add additional text to the message...
		$("#message01").append("Password: " + $password + " ");
	
		/* 
		checkboxes and radio buttons are dealt with 
		differently than other inputs.

		use .is(":checked") to determine a boolean
		value, true if selected, false if unselected
		*/
		$trueOrFalse = $("#remember").is(":checked")	;
		if($trueOrFalse == true){
			$("#message01").append("Checkbox was checked!");	
		}else{
			$("#message01").append("Checkbox was not checked");	
		}
	
	});

	$("#writetext").click(function(){
		/*
		to add a new text value to a form input, 
		use .val("new value") 
		*/
		$("#username").val("Shania");	
		/*
		.prop 
		the (property) function allows you
		to pre-check a checkbox
		*/

        $("#password").val("123456");
		$("#remember").prop("checked", true);
	});
});	