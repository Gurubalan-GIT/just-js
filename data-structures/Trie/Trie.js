class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
};

Trie.prototype.insert = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        if(!curr.children[c])
            curr.children[c] = new TrieNode();
        curr = curr.children[c];
    }
    
    curr.endOfWord = true;
};

Trie.prototype.search = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        if(!curr.children[c]) return false;
        curr = curr.children[c];
    }
            
    return curr.endOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    
    for(let c of prefix) {
        if(!curr.children[c]) return false;
        curr = curr.children[c];
    }
    
    return true;
};