const { assert } = require('chai');
const Trie = require('../lib/Trie.js');

describe('Trie', function() {

it('should have default properties', function () {
    var newTrie = new Trie();
    assert.equal(newTrie, Trie());
  });
});