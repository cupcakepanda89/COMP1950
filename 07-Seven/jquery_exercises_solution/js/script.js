/* 
containing all jQuery code inside document.ready()
ensures the page has finished loading before
we try to run any javascript
*/
 $(document).ready(function(){
	/* ----------------------------------------------   */		
	/*		Displaying Page Content Example:			*/
	/* ----------------------------------------------   */				
	$("#show").click(function(){
		$("#profile_image").show();
	});
	$("#hide").click(function(){
		$("#profile_image").hide();				
	});
	/* ----------------------------------------------   */		
	/*		Displaying Page Content Challenges:			*/
	/* ----------------------------------------------   */
	$("#fadein").click(function(){
		$("#profile_image").fadeIn();				
	});
	$("#fadeout").click(function(){
		$("#profile_image").fadeOut();				
	});
	$("#fadetoggle").click(function(){
		$("#profile_image").fadeToggle();				
	});
	$("#slideup").click(function(){
		$("#profile_image").slideUp();				
	});
	$("#slidedown").click(function(){
		$("#profile_image").slideDown();				
	});
	$("#slidetoggle").click(function(){
		$("#profile_image").slideToggle();				
	});

	/* ----------------------------------------------   */		
	/*		Alter Page Content Example:					*/
	/* ----------------------------------------------   */
	$("#change_text").click(function(){
		$("#jquery_message").text("This message has been changed by jQuery.");				
	});
	/* ----------------------------------------------   */		
	/*		Alter Page Content Challenges:				*/
	/* ----------------------------------------------   */
	$("#append").click(function(){
		$("#jquery_message").append("Hello again! ");				
	});
	$("#empty").click(function(){
		$("#jquery_message").empty();				
	});
	$("#html").click(function(){
		$("#jquery_message").html("<span style='color:red;font-size:20px;'>jQuery</span> rocks!");				
	});
	$("#changeattribute").dblclick(function(){
		$("#profile_image").attr("src", "http://bcitcomp.ca/comp1950/lectures/four/pic01.jpg");				
	});
	$("#toggleclass").mouseover(function(){
		$("#jquery_message").toggleClass("yellowclass");				
	});

	/* ----------------------------------------------   */		
	/*		Alter CSS:									*/	
	/* ----------------------------------------------   */
	$("#changecss").click(function(){
		$("#profile_image").css("border", "solid 1px black");				
		$("#profile_image").css("position", "absolute");				
		$("#profile_image").css("top", "0px");				
		$("#profile_image").css("right", "10px");				
		$("#profile_image").css("width", "200px");				
	});
	
	/* ----------------------------------------------   */		
	/*		jQuery Animation Example:					*/
	/* ----------------------------------------------   */
	$("#animateRightwards").click(function(){
		$("#jquery_message").css("position", "relative");				
		$("#jquery_message").animate({
			top: "+=5",
			left: "+=500",
			height: "+=100"
		}, 500);
	});
	$("#animateLeftwards").click(function(){
		$("#jquery_message").css("position", "relative");				
		$("#jquery_message").animate({
			top: "-=5",
			left: "-=500",
			height: "-=100"
		}, 500);
	});

	/*
	this demonstrates using the 
		event
	object to determine which h2 was just clicked,
	then using 
		next() 
	to select the next sibling of the clicked h2
	*/
	$("h2").click(function (event){
		$(this).next().slideToggle();
	});
 });