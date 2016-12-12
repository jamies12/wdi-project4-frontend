angular.module('spaces')
  .factory('Space', Space);

Space.$inject = ['$resource', 'API_URL'];
function Space($resource, API_URL) {
  return new $resource(`${API_URL}/spaces/:id`, {id: '@id' }, {
    update: { method: 'PUT'}
  });
}
