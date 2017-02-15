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
 // let eTag = {};
 // $.ajax({
 //   url: 'http://127.0.0.1:8080/data/blogData.json',
 //   type: 'HEAD',
 //   success: function(){
 //     eTag =
 //   }
 // });
  // $.ajax({
  //   url: 'http://127.0.0.1:8080/data/blogData.json',
  //   method: 'GET',
  //   dataType: 'json',
  //   ifModified: false,
  //   complete: function(data, status){
  //     if (status === 'success' && localStorage.projectData) {
  //       console.log('fetchAll if - from req', status);
  //       Project.loadAll(JSON.parse(localStorage.projectData));
  //       projectView.initIndex();
  //     } else {
  //       console.log('fetchAll else - from LS', status);
  //       localStorage.projectData = JSON.stringify(data);
  //       Project.loadAll(data);
  //       projectView.initIndex();
  //     }
  //   }
  // })
  //-----------figuring out etags *end*-------------------
  if (localStorage.projectData) {
    console.log('fetchAll if');
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndex();
  } else {
    console.log('fetchAll else');
    $.ajax({
      url: 'http://127.0.0.1:8080/data/blogData.json',
      method: 'GET',
      dataType: 'json',
      success: function(data){
        localStorage.projectData = JSON.stringify(data);
      // console.log(headers);
        Project.loadAll(data);
        projectView.initIndex();
      }
    });
  }
}
