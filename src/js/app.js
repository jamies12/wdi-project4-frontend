angular.module('spaces', ['ngResource', 'ui.router', 'satellizer', 'gridster', 'ngAnimate', 'ngMaterial'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.loginUrl = `${API_URL}/login`;
  $authProvider.signupUrl = `${API_URL}/register`;

  $authProvider.tokenPrefix = '';
}
