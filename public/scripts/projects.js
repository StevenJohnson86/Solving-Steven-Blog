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
  let source = $('#project-template').html();
  let templateRender = Handlebars.compile(source);
  return templateRender(this);
}

Project.loadAll = function(projectData) {
  projectData.forEach(function (projObj) {
    Project.all.push(new Project(projObj));
  })
}

Project.fetchAll = function() {
  //-------------trying to figure out etag *start*----------

  // If there is project data in localStorage:
  if (localStorage.projectData){
    console.log('LS projectData exists');

    $.ajax({
      method: 'GET',
      url: './data/blogData.json',
      dataType: 'json',
      complete: function (jqXHR){
        let respETag = jqXHR.getResponseHeader('ETag');
        console.log(respETag);

        if (respETag === localStorage.dataETag){
          console.log('jqXHR ETag = LS ETag, load from LS');
          Project.loadAll(JSON.parse(localStorage.projectData));
          projectView.initIndex();

        } else {
          console.log('jqXHR ETag != LS ETag, save ETag, getJSON');

          localStorage.dataETag = respETag;
          $.getJSON('./data/blogData.json', function(data){
            localStorage.projectData = JSON.stringify(data);
            Project.loadAll(data);
            projectView.initIndex();
          });
        }
      }
    });

  } else {
    console.log('no projectData in LS, getJSON');

    $.getJSON('./data/blogData.json', function(data){
      localStorage.projectData = JSON.stringify(data);
      Project.loadAll(data);
      projectView.initIndex();
    });
  }
}
