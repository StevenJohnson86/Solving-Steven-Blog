'use strict';

var projectView = {};

projectView.handleNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('section').hide();

    $('#' + $(this).data('content') + '-content').fadeIn();
  });
};

projectView.handleNav();
