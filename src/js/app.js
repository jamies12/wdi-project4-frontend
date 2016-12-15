angular.module('spaces', ['ngResource', 'ui.router', 'satellizer', 'gridster', 'ngAnimate', 'ngMaterial', 'ngFileUpload'])
  .constant('API_URL', window.location.hostname === 'localhost' ? 'http://localhost:3000' : '//wdi-project4-spaces-api.herokuapp.com')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.loginUrl = `${API_URL}/login`;
  $authProvider.signupUrl = `${API_URL}/register`;

  $authProvider.tokenPrefix = '';
}
