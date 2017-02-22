'use strict';

(function(module){

  const projectController = {};

  projectController.init = () => {
    Project.fetchAll(projectView.index);
  }

  module.projectController = projectController;
})(window);
