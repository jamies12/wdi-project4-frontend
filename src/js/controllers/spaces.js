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

  function changeBackground() {
    Space.update(spacesShow.space, () => {
      $state.reload();
    });
  }

  function changeColor() {
    Space.update(spacesShow.space, () => {
      $state.reload();
    });
  }

  function save() {
    spacesShow.space.contents.forEach((content) => {
      Content.update({ id: content.id }, content, () => {
        console.log('Deets are saved!');
      });
    });
  }

  spacesShow.changeBackground = changeBackground;
  spacesShow.changeColor = changeColor;
  spacesShow.deleteContent = remove;
  spacesShow.save = save;
}

// function isCurrentUser() {
//   return $auth.getPayload().id === Number($state.params.id);
// }
