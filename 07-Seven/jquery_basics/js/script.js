/* 
containing all jQuery code inside document.ready()
ensures the page has finished loading before
we try to run any javascript
*/
 $(document).ready(function () {
    /*safe to script here since document is ready
     $("div").click(function () {
         alert("Div was clicked")
     });*/

   /*  $("#my_unique_id").click(function () {
         alert("#my_unique_id was clicked")
     }); */

   $("#another_unique_id").hover(function () {
       alert("#another_unique_id was moused over")
   });

     /* include a parameter in the anonymous function...
     $("div").click(function( event ){
         /* ...access event specific info using the parameter */
    /*     alert("X position is " + event.pageX );
     });*/

   $(".myclass").click(function () {
       alert("X position is " + event.pageX + " and Y position is " + event.pageY);
   });
 });