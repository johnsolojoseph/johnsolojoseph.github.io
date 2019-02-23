(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
});



 //Search

 function myFunction() {
     // Declare variables
     var input, filter, ul, li, a, i;
     input = document.getElementById('myInput');
     filter = input.value.toUpperCase();
     ul = document.getElementById("myUL");
     li = ul.getElementsByTagName('li');

     // Loop through all list items, and hide those who don't match the search query
     for (i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "";
         } else {
             li[i].style.display = "none";
         }
     }
 }
