'use strict';

var projects= [];

function Project (options) {
  this.title = options.title;
  this.descript = options.descript;
  this.img = options.img;
  this.path = options.path;
  this.datePublished = options.datePublished;
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
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
  $newProject.attr('class', 'public-project');

  // if(!ternary waat?) what is class draft, why is it in lab? for articles without a pub date?
  $newProject.find('img').attr('src', this.img);
  $newProject.find('a').attr('href', this.path);
  $newProject.find('h3').text(this.title);
  $newProject.find('p.description').text(this.descript);
  $newProject.find('p.date').text(this.datePublished);

  return $newProject;
}

projects.forEach(function (p) {
  $('#projects-content').append(p.toHtml());


})
