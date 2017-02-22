'use strict';

(function(module){

  const aboutController = {};

  aboutController.init = () => {
    aboutView.index();
  }

  module.aboutController = aboutController;
})(window);
