$(function(){
    /* $('#start').click(function(){
        $('#cat').fadeOut(1000).fadeIn(1000);
    }); */

    /* $('#start').click(function(){
        $('#cat').animate({top:'-=100px'},500).animate({top:'+=100px'},500);
    }); */

    $('#start').click(function(){
        $('#cat').animate({width:'400px'},500).animate({width:'200px'},500)
        .animate({width:'300px'},500);
    });
})