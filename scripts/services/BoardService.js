/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').service('BoardService', ['$uibModal', 'BoardManipulator', function ($uibModal, BoardManipulator) {

  return {
    removeCard: function (board, column, card) {
      if (confirm('Are You sure to Delete?')) {
        BoardManipulator.removeCardFromColumn(board, column, card);
      }
    },

    addNewCard: function (board, column) {
        if (column) {
          BoardManipulator.addCardToColumn(board, column, "", "", false);
        }
    },
    kanbanBoard: function (board) {
      var kanbanBoard = new Board(board.name);
      angular.forEach(board.columns, function (column) {
        BoardManipulator.addColumn(kanbanBoard, column.name);
        angular.forEach(column.cards, function (card) {
          BoardManipulator.addCardToColumn(kanbanBoard, column, card.title, card.details, card.readonly);
        });
      });
      return kanbanBoard;
    }
  };
}]);
