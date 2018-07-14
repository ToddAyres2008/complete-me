class Node {
  constructor(data = null) {
    this.data = data
    this.child = {}
    this.completeWord = null;
  }
}

module.exports = Node