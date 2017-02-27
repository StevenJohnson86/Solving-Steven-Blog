'use strict';

page('/', homeController.init);
page('/blog', blogController.init);
page('/projects', projectController.init);
// page('/projects/:title', projectController.loadByTitle, projectController.index);
// page('/projects/:title?', projectView.showProject);
// page('')

page('/about', aboutController.init);

page();
