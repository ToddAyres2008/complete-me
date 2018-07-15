var Node = require('./Node');

// import fs from 'fs';

// const text = "/usr/share/dict/words";
// const dictionary = fs.readFileSync(text).toString().trim().split('\n');

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0
    this.isCompleteWord = false;
  }


//insert function should be able to take in data

insert(string) {

  let currentNode = this.root;
  let wordLetters = [...string]

//if no data, return the function to close out

  if (!string) {
    return null;
  }
//if there is data, make currentNode
//make new node(currentNode) attach to parent if no child exists
// Check each successive node until no child exists and connect to end of data structure (while/forEach)
// Reassign child node to current node
//adjust counter if a word from dictionary has been found

  while (wordLetters.length) {

    wordLetters.forEach((letter) => {
    if (!currentNode.child[letter]) {
    currentNode.child[letter] = new Node(letter);
    }
    currentNode = currentNode.child[letter];
    })

    currentNode.completeWord = string.toLowerCase();
    this.count++;
  }
}

suggest(prefix) {

 //create blank array of words that can be suggested based on current nodes beginning at null;

  let currentNode = this.root
  let possibleWords = [];


////if node does not exist, return

    if (!prefix) {
      return [];
    }

    lowercaseLetters.forEach(letter => {
      currentNode = currentNode.children[letter].toLowerCase();
    });

  let searchNodes = node => {

    let currentNode = this.root;
    let lowercaseLetters = [...prefix];

//search array for all words that match current iteration of node inputs (forEach)
//search each node individually in order
//if node exists, continue down trie
//search array for all words that match current iteration of node inputs
// return all possible matches for entered nodes

      if (node.completeWord) {
        searchNodes.push(node.completeWord);
      }

    let nodeKeys = Object.keys(node.child);

      nodeKeys.forEach(key => {
      search(node.child[key])
      });
    };

  searchNodes(currentNode)
  return possibleWords;
  }
}












//if the word length is 0, check for word in array

//if the word is in the array, 

//

// }


// populate() {

