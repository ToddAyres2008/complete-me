var Node = require('./Node');

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
    this.possibleWords = [];
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

    //also add to the currentNode
    currentNode.completeWord = string.toLowerCase();
    this.count++;
  }



  

  suggest(prefix) {
    let currentNode = this.root
    let lowercaseLetters = [...prefix];

      lowercaseLetters.forEach(letter => {
        currentNode = currentNode.child[letter];
      });

      let searchNodes = node => {

        if (node.completeWord) {
          this.possibleWords.push(node.completeWord);
        }

      let nodeKeys = Object.keys(node.child);

        nodeKeys.forEach(key => {
        searchNodes(node.child[key])
        })
      }
        searchNodes(currentNode)
        return this.possibleWords;
  }
}




module.exports = Trie
