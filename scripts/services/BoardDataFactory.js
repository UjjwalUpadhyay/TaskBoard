/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').service('BoardDataFactory', function () {

  return {
    kanban: {
      "name": "Kanban Board",
      "columns": [
        {"name": "List 1", "cards": [
          {"title": "Come up with a POC for new Project", "readonly": true},
          {"title": "Design new framework for reporting module", "readonly": true}
        ]}
      ]
    }
  };
});
