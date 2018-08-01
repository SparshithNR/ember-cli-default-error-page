'use strict';
const { routeModifier } = require('./lib/route-modifier');

module.exports = {
  name: 'ember-cli-default-error-page',
  init(_parent, project) {
    this._super(...arguments);
    routeModifier(project);
  }
};
