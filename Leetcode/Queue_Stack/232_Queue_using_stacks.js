
var MyQueue = function() {
    this.first = [];
    this.last = [];
};

MyQueue.prototype.push = function(x) {
   const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(x);
    return this;
};

MyQueue.prototype.pop = function() {
   const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
  return this.first.pop() || null;
};

MyQueue.prototype.peek = function() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1] || null;
};

MyQueue.prototype.empty = function() {
  return (this.last.length == 0 && this.first.length == 0)
};
