let assert = require('assert');
let fs = require('fs');
let { routeModifier } = require('../lib/route-modifier');
let fileContent = fs.readFileSync('tests/fixtures/app/router.js');
describe('Adding routes', function() {
  after(function() {
    fs.writeFileSync( 'tests/fixtures/app/router.js', fileContent);
  });

  it('adds routes', function () {
    let modifiedCheckFile = fs.readFileSync('tests/fixtures/modified-route.js', 'utf8');
    routeModifier({root: 'tests/fixtures'});
    assert(modifiedCheckFile == fs.readFileSync('tests/fixtures/app/router.js', 'utf8'), 'File modified');
  });

  it('doesn\'t duplicate routes', function () {
    let modifiedCheckFile = fs.readFileSync('tests/fixtures/modified-route.js', 'utf8');
    routeModifier({root: 'tests/fixtures'});
    assert(modifiedCheckFile == fs.readFileSync('tests/fixtures/app/router.js', 'utf8'), `File didn't change`);
  });
});