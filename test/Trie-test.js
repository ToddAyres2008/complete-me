const { assert } = require('chai');
const Trie = require('../lib/Trie.js');
const Node = require('../lib/Node.js');

// import fs from 'fs';

// const text = "/usr/share/dict/words";
// const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('Trie', function() {

  it('should have its root establish a new Node', function () {
    let newTrie = new Trie();
    let newNode = new Node();
    assert.deepEqual(newTrie.root, newNode)
    });

  it('should begin with an intial count of 0', function(){
    let newTrie = new Trie();
    assert.deepEqual(newTrie.count, 0)
    });

  it('should increase the counter completed word', function () {
    let newTrie = new Trie();
    newTrie.insert('dog');
    newTrie.insert('cat');
    assert.deepEqual(newTrie.count, 2)
  });

  it('should add a child node to complete a word', function() {
    let newTrie = new Trie();
    newTrie.insert('dog')
    assert.equal(newTrie.root.completeWord, 'dog')
    });

  it('should not populate completeWord value, if no string passed', function() {
    let newTrie = new Trie();
    newTrie.insert()
    assert.equal(newTrie.root.completeWord, null)
  });

  it('should return suggestions', function() {
    let newTrie = new Trie();
    newTrie.insert('zebra');
    newTrie.insert('zoo')
    newTrie.suggest('z');
    assert.deepEqual(newTrie.possibleWords, ['zebra', 'zoo'])
  });

  // it('should be able to suggest from the dictionary', function(){
  //   let newTrie = new Trie();
  //   newTrie.populate(dictionary);
  //   newTrie.suggest('except');
  //   assert.deepEqual(newTrie.possibleWords, 
  //     ['cat'
  //     ])
  // })

});


