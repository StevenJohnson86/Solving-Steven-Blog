'use strict';

(function(module){

  const homeView = {};

  homeView.index = () => {
    $('section').hide();
    $('#home-content').show();
  }

  module.homeView = homeView
})(window);
