/**
 * Created by katelyntruong on 2017-11-01.
 */
$(document).ready(function () {
    $(window).load(function () {
        $(".section").hide();

    });
   $(".nav").click(function(){
        $(".section").slideToggle(3000);
    });


});