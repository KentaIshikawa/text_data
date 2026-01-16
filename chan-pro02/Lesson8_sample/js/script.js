(function () {
  'use strict';

  jQuery(function ($) {
    $('.js-menu').on('click', function () {
      $('body').toggleClass('is-open');
    });

    $('.js-modal').each(function () {
      $(this).modaal({
        type: 'image'
      });
    });
  });

})();
