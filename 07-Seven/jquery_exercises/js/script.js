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
	

	
	
	/* ----------------------------------------------   */		
	/*		Alter Page Content Example:					*/
	/* ----------------------------------------------   */
	$("#change_text").click(function(){
		$("#jquery_message").text("This message has been changed by jQuery.");				
	});
	/* ----------------------------------------------   */		
	/*		Alter Page Content Challenges:				*/
	/* ----------------------------------------------   */
	$("#fadein").click(function () {
		$("#profile_image").fadeIn("easing", function () {

        });
    });

     $("#fadeout").click(function () {
         $("#profile_image").fadeOut("queue", function () {

         });
     });

     $("#fadetoggle").click(function () {
         $("#profile_image").fadeToggle("slow",function () {
			 
         });
     });

     $("#slideup").click(function () {
         $("#profile_image").slideUp("easing",function () {

         });
     });

     $("#slidedown").click(function () {
         $("#profile_image").slideDown("queue",function () {

         });
     });

     $("#slidetoggle").click(function () {
         $("#profile_image").slideToggle("300",function () {

         });
     });

     $("#append").click(function () {
		 $("#jquery_message").append("<strong>Hello Again</strong>");
     });

     $("#empty").click(function () {
		 $("#jquery_message").empty();
     });
     /* ----------------------------------------------   */
	/*		Alter CSS:									*/	
	/* ----------------------------------------------   */

	
	
	
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


 });