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

  projectView.index = function () {
    $('#projects-content').empty();
    Project.all.forEach(function (p) {
      $('#projects-content').append(p.toHtml());
    });
    $('section').hide();
    $('#projects-content').show();
    projectView.populateFilter();
    projectView.handleTitleFilter();

    // --------------append stats--------------
    // let statWords = Project.descriptWords();
    // statWords.map((val)=> {
    //   $('#projects-content').append(`<p>${val}</p>`)
    // });
  }

  projectView.listRepos = function () {
    $('#projects-content').append('<h2>Here is a list of all my repos</h2>');
    let repoTemplate = Handlebars.compile($('#repo-template').html());
    $('#projects-content').append(ghRepos.with('name').map(repoTemplate));
    //RENDER REPOS FROM REQUEST
  }


  module.projectView = projectView;
})(window);
