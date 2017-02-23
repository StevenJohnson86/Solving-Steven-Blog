'use strict';

(function(module){

  function Project (options) {
    this.title = options.title;
    this.descript = options.descript;
    this.img = options.img;
    this.path = options.path;
    this.datePublished = options.datePublished;
    this.category = options.category;
  }

  Project.all = [];

  // ***could move to a blogs model file when implemented****
  // function BlogEntry (title, content) {
  //   this.title = title;
  //   this.content = content;
  //   //add timeDate prototype
  // }

  Project.prototype.toHtml = function () {
    let templateRender = Handlebars.compile($('#project-template').html());
    return templateRender(this);
  }

  Project.loadAll = (projectData) => {
    Project.all = projectData.map(projObj => new Project(projObj));
  }

  Project.descriptWords = () => Project.all.map(project => project.descript.split(' ').length)
                                           .reduce((totWords, val) => {
                                             totWords + val;
                                             totWords.push(val);
                                             return totWords;
                                           },[]);

  Project.fetchAll = function() {

    // If there is project data in localStorage:
    if (localStorage.projectData){
      console.log('LS projectData exists');

      $.ajax({
        method: 'GET',
        url: '../../data/blogData.json',
        dataType: 'json',
        complete: function (jqXHR){
          let respETag = jqXHR.getResponseHeader('ETag');
          console.log(respETag);

          if (respETag === localStorage.dataETag){
            console.log('jqXHR ETag = LS ETag, load from LS');
            Project.loadAll(JSON.parse(localStorage.projectData));
            projectView.index();

          } else {
            console.log('jqXHR ETag != LS ETag, save ETag, getJSON');

            localStorage.dataETag = respETag;
            $.getJSON('../../data/blogData.json', function(data){
              localStorage.projectData = JSON.stringify(data);
              Project.loadAll(data);
              projectView.index();
            });
          }
        }
      });

    } else {
      console.log('no projectData in LS, getJSON');

      $.getJSON('../../data/blogData.json', function(data){
        localStorage.projectData = JSON.stringify(data);
        Project.loadAll(data);
        projectView.index();
      });
    }
  }
  module.Project = Project;
})(window);
