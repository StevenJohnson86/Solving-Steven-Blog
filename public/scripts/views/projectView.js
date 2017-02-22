'use strict';
(function(module){
  let projectView = {};

  projectView.populateFilter = function () {
    $('.public-project').each(function(){
      let title, optionTag;
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

  // projectView.handleNav = function () {
  //   $('.main-nav').on('click', '.tab', function() {
  //     $('section').hide();
  //     $('#current-loc').text($(this).text());
  //     $('#' + $(this).data('content') + '-content').fadeIn();
  //   });
  // };

  projectView.index = function () {
    Project.all.forEach(function (p) {
      $('#projects-content').append(p.toHtml());
    });
    $('section').hide();
    $('#projects-content').show();
    projectView.populateFilter();
    projectView.handleTitleFilter();

    // projectView.handleNav();
    // --------------append stats--------------
    let statWords = Project.descriptWords();
    $('#stat').empty();
    statWords.map((val)=> {
      $('#stat').append(`<p>${val}</p>`)
    });
  }
  module.projectView = projectView;
})(window);
