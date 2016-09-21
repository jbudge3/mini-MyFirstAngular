angular.module('friendsList').controller('mainCtrl', function($scope) {

  $scope.friends = ['Brady', 'Jace', 'Cory', 'Jordan'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
  };

})
