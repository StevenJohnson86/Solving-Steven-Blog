'use strict';

var projects= [];

function Project (options) {
  this.title = options.title;
  this.descript = options.descript;
  this.img = options.img;
  this.path = options.path;
  this.datePublished = options.datePublished;
  this.category = options.category;
}

// function BlogEntry (title, content) {
//   this.title = title;
//   this.content = content;
//   //add timeDate prototype
// }

projectData.forEach(function (projObj) {
  projects.push(new Project(projObj));
})

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
}

projects.forEach(function (p) {
  $('#projects-content').append(p.toHtml());
});
