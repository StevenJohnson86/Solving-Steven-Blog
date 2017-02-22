'use strict';

(function(module){

  const aboutView = {};

  aboutView.index = () => {
    $('section').hide();
    $('#about-content').show();
  }

  module.aboutView = aboutView
})(window);
