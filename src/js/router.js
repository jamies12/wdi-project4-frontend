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
    .state('spacesIndex', {
      url: '/spaces',
      templateUrl: '/templates/spacesIndex.html',
      controller: 'SpacesIndexController as spacesIndex'
    })
    .state('spacesShow', {
      url: '/spaces/:id',
      templateUrl: '/templates/spacesShow.html',
      controller: 'SpacesShowController as spacesShow'
    });

  $urlRouterProvider.otherwise('/spaces');
}
