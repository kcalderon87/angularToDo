angular
    .module('angularToDo.component.listContent')
    .directive('listContent', ListContent);

function ListContent() {
    return {
        restrict: 'E',
        scope: {
            listData: '='
        },
        templateUrl: '/angularToDo/features/components/listContent/listContent.html',
        controller: ListContentCtrl,
        controllerAs: 'ListContentVM',
        bindToController: true
    };
}

function ListContentCtrl() {

}
