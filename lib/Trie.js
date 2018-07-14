const Node = require ('./lib/Node');

import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

class Trie 
  (constructor) {
    this.root = new Node();
    this.count = 0
}