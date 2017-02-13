'use strict';

var projectView = {};

projectView.populateFilter = function () {
  $('.public-project').each(function(){
    var title, optionTag;
    title = $(this).find('h3').text();
    optionTag = '<option value="' + title + '">' + title + '</option>';
    $('#title-filter').append(optionTag);
  });
}

projectView.handleTitleFilter = function() {
  $('#title-filter').on('change', function() {
    if ($(this).val()) {
      $('.public-project').hide();
      $('div[data-title = "' + $(this).val() + '"]').fadeIn();
    } else {
      $('.public-project').fadeIn();
    };
  });
}

projectView.handleNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('section').hide();

    $('#' + $(this).data('content') + '-content').fadeIn();
  });
};

//-------------function calls-------------------------

projectView.populateFilter();
projectView.handleTitleFilter();
projectView.handleNav();
