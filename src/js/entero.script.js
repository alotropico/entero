import 'popper.js';
import 'bootstrap';

(function ($) {

  'use strict';

  Drupal.behaviors.sameHeight = {
    attach: function (context) {
      $(window).on('resize', function(){
        resize();
      });
      $(document).ready(function() {
        setTimeout(function() {
          resize();
        }, 500);
      });
      resize();
    }
  };

  const resizeSets = [
    '.feature .basic__body',
    '.products .card-body',
    '.products .card-body h5',
    '.products .card-body p'
  ];

  function resize() {
    
    resizeSets.forEach(x => {
      $(x).css('height', 'auto');

      let h = 0;

      $(x).each(function(){
        const hh = $(this).outerHeight();
        if(h < hh) {
          h = hh;
        }
      });
  
      if(h) $(x).css('height', h);
    });
  }

  // ** //

  Drupal.behaviors.smoothScroll = {
    attach: function (context) {
      $(document).ready(function() {
        $('nav .nav .nav-link').each(function(){
          const link = $(this).attr('href');

          if(link.indexOf('#') == 0) {

            const obj = $(link);

            if(!$(link).length) {
              $(this).attr('href', '/' + link);
            } else {
              $(this).on('click', (e) => {
                e.preventDefault();

                $('html, body').stop().animate({
                    scrollTop: obj.offset().top - $('nav').height()
                }, 600, 'linear');
              });
            }
          }
        });
      });
    }
  };

})(jQuery, Drupal);
