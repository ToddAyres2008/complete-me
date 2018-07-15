const { assert } = require('chai');
const Node = require('./lib/Node.js');


describe('Node', function() {

  it('should instantiate a new Node', function () {
    var newNode = new Node();
    assert.isObject(newNode);
  });
});
