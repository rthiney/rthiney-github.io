 $().ready(function() {
     $('[rel="tooltip"]').tooltip();

     console.log("Script Loaded!!!");
     // the body of this function is in assets/material-kit.js
     //materialKit.initSliders();
     window_width = $(window).width();

     if (window_width >= 992) {
         big_image = $('.wrapper > .header');

         $(window).on('scroll', materialKitDemo.checkScrollForParallax);
     }


 });

 function rotateCard(btn) {
     var $card = $(btn).closest('.card-container');
     console.log($card);
     if ($card.hasClass('hover')) {
         $card.removeClass('hover');
     } else {
         $card.addClass('hover');
     }
 }