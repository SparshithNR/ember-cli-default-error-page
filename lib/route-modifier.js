const fs = require('fs');
const EmberRouterGenerator = require('ember-router-generator');

module.exports.routeModifier = project => {
  let source = fs.readFileSync(project.root + '/app/router.js');
  let routes = new EmberRouterGenerator(source);
  routes = routes.add('not-found', { path: '/*path' });
  fs.writeFileSync(project.root + '/app/router.js', routes.code());
}
