/**
 * makes the navbar transparent when the page is scrolled
 */
 function checkScroll(){
    var startY = $('.navbar').height(); //The point where the navbar changes in px
    // the following function adds a class scrolled when scrolling is detected
    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.navbar-nav').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.navbar-nav').removeClass("scrolled");
    }
}

$(document).ready(function(){
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }
});