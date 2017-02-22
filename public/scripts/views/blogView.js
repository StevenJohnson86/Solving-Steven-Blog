'use strict';

(function(module){

  const blogView = {};

  blogView.index = () => {
    $('section').hide();
    $('#blog-content').show();
  }

  module.blogView = blogView
})(window);
