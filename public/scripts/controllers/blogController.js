'use strict';

(function(module){

  const blogController = {};

  blogController.init = () => {
    blogView.index();
  }

  module.blogController = blogController;
})(window);
