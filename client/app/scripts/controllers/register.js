'use strict';

angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    
   var player,
     register;
    
    register = this;
    
    player = register.player = {};
    
    register.submit = function () {

      if (
        !player.firstname ||
        !player.lastname ||
        !player.bday ||
        !player.jerseynumber ||
        !player.teamname ||
        !player.dominanthand ||
        !player.goals ||
        !player.assists 
      )
        {
          alert('Please fill out all form fields.');
          return false;
      }
      console.log(player);
      var request = $http.post('/register', player);
      // we'll come back to here and fill in more when ready
      request.success(function (data) {
        // our json response is recognized as
        // the data parameter here. See? Our msg
        // value is right there!
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });
    }

  });
