angular.module('spaces')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    // .state('usersIndex', {
    //   url: '/users',
    //   templateUrl: '/templates/usersIndex.html',
    //   controller: 'UsersIndexController as usersIndex'
    // })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('spaceIndex', {
      url: '/spaces',
      templateUrl: '/templates/spaceIndex.html',
      controller: 'SpaceIndexController as spaceIndex'
    });

  $urlRouterProvider.otherwise('/spaces');
}
