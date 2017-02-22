'use strict';

(function(module){

  const homeController = {};

  homeController.init = () => {
    homeView.index();
  }

  module.homeController = homeController;
})(window);
