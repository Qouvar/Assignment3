$(function() {
    $( "#menu" ).menu({
        position: { 
           my: "left top", 
           at: "right top" }
    });
 });
$(document).ready(function(){
    var $toggleButton = $('.toggle-button');
    $toggleButton.on('click', function(){
        $(this).toggleClass('button-open');
    });
})