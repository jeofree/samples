
$( document ).ready(function() {

  $('.overlay').scroll(function() {
   var scroll = $('.overlay').scrollTop();



   // display counter showing where scroll is at any moment
   // $("#inst_text").html("</p>" + scroll + "</p>" );

   $('#position').html(+ $('.overlay').scrollTop().toFixed(1));

   $(".noscroll").css('backgroundImage','url(circles.jpg');

    if (scroll >= 508 && scroll <=1179) {
    // alert("scroll alert!")
       $("#topBackground").css('display','none');
     
   }
     else if (scroll >=1180 && scroll <=2068) {
      // alert("scroll alert!")
        $(".noscroll").css('backgroundImage','url(teletech-2.jpg');
     }

     else if (scroll >=2069) {
      // alert("scroll alert!")
        $(".noscroll").css('backgroundImage','url(Agari-graph.png');
     }


     else if (scroll <=508) {
        $("#topBackground").css('display','block');
     }

   
});

});
