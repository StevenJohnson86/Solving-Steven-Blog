'use strict';

function Project (options) {
  this.title = options.title;
  this.descript = options.descript;
  this.img = options.img;
  this.path = options.path;
  this.datePublished = options.datePublished;
  this.category = options.category;
}

Project.all = [];

// function BlogEntry (title, content) {
//   this.title = title;
//   this.content = content;
//   //add timeDate prototype
// }

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
}

Project.loadAll = function(projectData) {
  projectData.forEach(function (projObj) {
    Project.all.push(new Project(projObj));
  })
}

Project.fetchAll = function() {

}
