const { assert } = require('chai');
const Node = require('../lib/Node.js');


describe('Node', function() {

  it('should instantiate a new Node', function () {
    let newNode = new Node();
    assert.isObject(newNode);
  });

  it('should have a data property default of null', function() {
    assert.equal(Node.data, null)
  });

  it('should be able to accept data', function() {
    let newNode = new Node('dog')
    assert.equal(newNode.data, 'dog')
  })

  it('should begin with an empty child object', function() {
    let newNode = new Node()
    assert.equal(newNode.child, {})
  });

  it('should begin with a completeWord value of null', function() {
    let newNode = new Node()
    assert.equal(Node.data, null)
  });

});
