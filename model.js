/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';
function Board(name) {
  return {
    name: name,
    columns: [],
    backlogs: []
  };
}

function Column(name) {
  return {
    name: name,
    cards: []
  };
}

function Backlog(name) {
  return {
    name: name,
    phases: []
  };
}

function Phase(name) {
  return {
    name: name,
    cards: []
  };
}

function Card(title, status, details, readonly) {
  this.title = title;
  this.status = status;
  this.details = details;
  this.readonly = readonly;
  return this;
}
