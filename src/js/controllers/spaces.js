angular.module('spaces')
  .controller('SpacesIndexController', SpacesIndexController)
  .controller('SpacesShowController', SpacesShowController);

SpacesIndexController.$inject = ['Space', 'User', '$auth'];
function SpacesIndexController(Space, User, $auth) {
  const spacesIndex = this;

  spacesIndex.all = Space.query();

  spacesIndex.user = User.get({ id: $auth.getPayload().id });
}

SpacesShowController.$inject = ['Space', '$state', '$auth', 'User', 'Content'];
function SpacesShowController(Space, $state, $auth, User, Content) {
  const spacesShow = this;

  spacesShow.user = User.get({ id: $auth.getPayload().id });
  spacesShow.space = Space.get({ id: $state.params.id });

  spacesShow.isLoggedIn = $auth.isAuthenticated;

  function remove(content) {
    Content.remove({ id: content.id }, () => {
      $state.reload();
    });
  }



  spacesShow.deleteContent = remove;
}

// function isCurrentUser() {
//   return $auth.getPayload().id === Number($state.params.id);
// }

// Room.query(data => {
//     userAppEdit.rooms = [];
//     data.forEach(item => {
//       if (item.user_id === parseInt($auth.getPayload().id)){
//         userAppEdit.rooms.push(item);
//       }
//     });
//   });
