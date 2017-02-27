'use strict';

(function(module){

  const projectController = {};

  // projectController.index = (ctx) => projectView.index(ctx.projects);
  //
  // projectController.loadByTitle = (ctx, next) => {
  //   let projectData = projects => {
  //   ctx.projects = projects;
  //   next();
  //   };
  //
  // }

  projectController.init = () => {
    Project.fetchAll(projectView.index);
    ghRepos.request(projectView.listRepos);
  }

  module.projectController = projectController;
})(window);
