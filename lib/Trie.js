var Node = require('./Node');

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }



insert(string) {

  if (!string) {
    return;
  }

  let currentNode = this.root;
  let wordLetters = [...string.toLowerCase()]

  while (wordLetters.length) {
    let letter = wordLetters.shift();

    if (!currentNode.child[letter]) {
    currentNode.child[letter] = new Node(letter);
    }
    currentNode = currentNode.child[letter];
    }
   
    this.root.completeWord = string.toLowerCase();
    this.count++;
  }
}


  

// suggest(prefix) {

//  //create blank array of words that can be suggested based on current nodes beginning at null;

//   let currentNode = this.root
//   let possibleWords = [];


// ////if node does not exist, return

//     if (!prefix) {
//       return [];
//     }

//     lowercaseLetters.forEach(letter => {
//       currentNode = currentNode.children[letter].toLowerCase();
//     });

//   let searchNodes = node => {

//     let currentNode = this.root;
//     let lowercaseLetters = [...prefix];

// //search array for all words that match current iteration of node inputs (forEach)
// //search each node individually in order
// //if node exists, continue down trie
// //search array for all words that match current iteration of node inputs
// // return all possible matches for entered nodes

//       if (node.completeWord) {
//         searchNodes.push(node.completeWord);
//       }

//     let nodeKeys = Object.keys(node.child);

//       nodeKeys.forEach(key => {
//       search(node.child[key])
//       });
//     };

//   searchNodes(currentNode)
//   return possibleWords;
//   }
// }












//if the word length is 0, check for word in array

//if the word is in the array, 

//

// }


// populate() {
module.exports = Trie
