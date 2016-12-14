angular.module('spaces')
  .controller('SpacesIndexController', SpacesIndexController)
  .controller('SpacesShowController', SpacesShowController)
  .controller('SpacesNewController', SpacesNewController);

SpacesIndexController.$inject = ['Space', 'User', '$auth'];
function SpacesIndexController(Space, User, $auth) {
  const spacesIndex = this;

  spacesIndex.all = Space.query();

  spacesIndex.user = User.get({ id: $auth.getPayload().id });
}

SpacesNewController.$inject = ['Space', '$state', 'User', '$auth'];
function SpacesNewController(Space, $state, User, $auth) {
  const spacesNew = this;

  spacesNew.user = User.get({ id: $auth.getPayload().id });
  spacesNew.newSpace = {};

  function createSpace() {
    Space.save(spacesNew.newSpace, () => {
      $state.go('spacesIndex');
    });
  }

  spacesNew.create = createSpace;
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

  function destroy() {
    Space.remove({ id: $state.params.id }, () => {
      $state.go('spacesIndex');
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
  spacesShow.deleteSpace = destroy;
  spacesShow.save = save;
}

// function isCurrentUser() {
//   return $auth.getPayload().id === Number($state.params.id);
// }
