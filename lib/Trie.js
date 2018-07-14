const Node = require ('./lib/Node');

import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

class Trie 
  (constructor) {
    this.root = new Node();
    this.count = 0
    this.isCompleteWord = false;
}

//insert function should be able to take in data

insert(data) {

  let currentNode = this.root;
  let wordLetters = [...data]

//if no data, return the function to close out
  if (!data) {
    return;
  
//if there is data, make currentNode
//make new node(currentNode) attach by  following its route until there is no child and connect to end of data structure
//if no node, add to child of currentNode (recursive function or while loop
//adjust counter if a word from dictionary has been found

  while (wordLetters.length) {

  let letter = wordLetters.shift()

  if (!currentNode.child[letter]) {
    currNode.child[letter] = new Node(letter);
  }
    currentNode = currNode.child[letter];
    }
    currentNode.completeWord = data.toLowerCase();
    this.count++;
}









 
 

}

suggest() {
//create blank array of words that can be suggested based on current nodes beginning at null;

//add fullWord property on trie when a word matches word in array;

//search each node individually in order

//if node exists, continue down trie

//search array for all words that match current iteration of node inputs

//if node does not exist, return

//if the word length is 0, check for word in array

//if the word is in the array, 

//

}


populate() {

}