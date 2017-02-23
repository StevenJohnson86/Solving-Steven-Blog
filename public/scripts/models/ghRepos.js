'use strict';

(function(module){

  const ghRepos = {};

  ghRepos.all = [];

  ghRepos.request = function(callback){
    $.get('/github/user/repos')
      .then(function(data){
        ghRepos.all = [];
        data.forEach(repo => ghRepos.all.push(repo));
        // ghRepos.all = data;
      },
    function(err){
      console.error('github repo request, error code: ', err);
    })
    .then(callback);
  }

  ghRepos.with = function(prop) {
    return ghRepos.all.filter(function(repo){
      return repo[prop];
    })
  }

  module.ghRepos = ghRepos;
})(window);
