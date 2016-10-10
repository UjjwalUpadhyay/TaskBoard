/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').controller('listController', ['$scope', 'BoardService', 'BoardDataFactory', 'BoardManipulator', function ($scope, BoardService, BoardDataFactory, BoardManipulator) {

  $scope.kanbanBoard = BoardService.kanbanBoard(BoardDataFactory.kanban);

  $scope.kanbanSortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };

  $scope.saveCard = function (card) {
      card.readonly = true;
  }

  $scope.removeCard = function (column, card) {
    BoardService.removeCard($scope.kanbanBoard, column, card);
  };

  $scope.addNewCard = function (column) {
    BoardService.addNewCard($scope.kanbanBoard, column);
  }

  $scope.saveList = function(title) {
    BoardManipulator.addColumn($scope.kanbanBoard, title);
  }

  $scope.editMode = function(card) {
    card.readonly = false;
  }
}]);
