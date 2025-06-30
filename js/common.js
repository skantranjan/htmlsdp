$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".left-menu").toggleClass("left-menu-open");
    $(".hamburger").toggleClass("switch");
    $("header").toggleClass("nolinks");
  });
});

