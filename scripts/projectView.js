'use strict';

var projectView = {};

projectView.populateFilter = function () {
  $('.public-project').each(function(){
    var title, optionTag;
    title = $(this).find('h2').text();
    optionTag = `<option value="${title}">${title}</option>`;

    if ($(`#title-filter option[value="${title}"]`).length === 0) {
      $('#title-filter').append(optionTag);
    }
  });
}

projectView.handleTitleFilter = function() {
  $('#title-filter').on('change', function() {
    if ($(this).val()) {
      $('.public-project').hide();
      $('div[data-title = "' + $(this).val() + '"]').fadeIn();
    } else {
      $('.public-project').fadeIn();
    }
  });
}

projectView.handleNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('section').hide();
    $('#current-loc').text($(this).text());
    $('#' + $(this).data('content') + '-content').fadeIn();
  });
};

//-------------function calls-------------------------
$(document).ready(function() {
  projectView.populateFilter();
  projectView.handleTitleFilter();
  projectView.handleNav();
});
