// Mini knockout.js unit testing environment
global.window = {};
global.ko = require('knockout');

const assert = require('assert');
const index = require('./index.js');

describe('add button', function() {
  it('should add item',function() {
    var vm = new index.ViewModel();
    vm.firstName = "Moo";
    vm.add();
    assert.equal(vm.items()[0].firstName, 'Moo');
    assert.equal(vm.items()[0].lastName, 'Bar');
  });
});

describe('remove button', function() {
  it('should remove item',function() {
    vm = new index.ViewModel();
    vm.add();
    vm.items()[0].remove();
    assert.equal(vm.items().length, 0);
  });
});
  