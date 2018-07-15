class Node {
  constructor(data) {
    this.data = data || null;
    this.child = {};
    this.completeWord = null;
  }
}

module.exports = Node