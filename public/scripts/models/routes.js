'use strict';

page('/', homeController.init);
page('/blog', blogController.init);
page('/projects', projectController.init);
page('/about', aboutController.init);

page();
