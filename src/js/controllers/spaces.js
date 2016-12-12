angular.module('spaces')
  .controller('SpaceIndexController', SpaceIndexController);

SpaceIndexController.$inject = ['Space', 'User', '$auth'];
function SpaceIndexController(Space, User, $auth) {
  const spaceIndex = this;

  spaceIndex.all = Space.query();
  console.log(spaceIndex.all);

  // space.isCurrentUser = isCurrentUser;
  // space.user = User.get($state.params);
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
