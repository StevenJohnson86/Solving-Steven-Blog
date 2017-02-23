'use strict';

(function(module){

  const projectController = {};

  projectController.init = () => {
    Project.fetchAll(projectView.index);
    ghRepos.request(projectView.listRepos);
  }

  module.projectController = projectController;
})(window);
