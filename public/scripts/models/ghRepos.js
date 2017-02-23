'use strict';

(function(module){

  const ghRepos = {};

  ghRepos.all = [];

  ghRepos.request = function(callback){
    $.get('/github/user/repos')
      .then(function(data){
        ghRepos.all = data;
      },
    function(err){
      console.error('github repo request, error code: ', err);
    })
    .then(callback);
  }

  ghRepos.with = function(prop) {
    ghRepos.all.filter(function(repo){
      repo[prop];
    })
  }


})(window);
