angular.module('starter.controllers', [])

.controller('LoginCtrl',function($scope,$ionicNavBarDelegate){
	 $ionicNavBarDelegate.title('聚信立对接管理系统');
})

.controller('DashCtrl', function($scope,Customers) {
	//console.log(Customers.all());

})

.controller('DashListCtrl', function($scope,Customers) {
	console.log(Customers.all());
	var vm = $scope.vm = {};
	
	vm.customers = Customers.all();

})

.controller('DashDetailCtrl', function($scope,Customers,$state) {
  console.log(Customers.all());
  var vm = $scope.vm = {};
  
  console.log($state);
  vm.customer = Customers.get($state.params.id);
  console.log(vm.customer);

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
