$(document).ready(function(){
    $("#quadrado").mouseenter(function(){
        let x = Math.random() * 1500;
        let y = Math.random() * 600;
        $("#quadrado").animate({left:x,bottom:y});
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        $("#quadrado").css("background-color","rgb("+r+","+g+","+b+")");
    });	
});