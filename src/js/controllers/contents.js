angular.module('spaces')
  .controller('ContentsNewController', ContentsNewController);

ContentsNewController.$inject = ['Content', '$state', 'Space'];
function ContentsNewController(Content, $state) {
  const contentsNew = this;

  contentsNew.newContent = { space_id: $state.params.id, content_type: 'text' };

  function createContent() {
    // contentsNew.space.Content.push(contentsNew.newContent);
    Content.save(contentsNew.newContent, (content) => {
      $state.go('spacesShow', { id: content.space.id });
    });
  }

  contentsNew.create = createContent;
}
