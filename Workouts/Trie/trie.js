class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char]
        }
        return true;
    }

    // Auto completion of string implementation:

    findNode(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return null;
            node = node.children[char]
        }
        return node;
    }

    collectWords(node, prefix, result) {
        if (node.isEndOfWord) result.push(prefix);

        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, result);
        }
    }

    autoComplete(prefix) {
        let node = this.findNode(prefix);
        if (!node) {
            return []
        }
        let result = [];
        this.collectWords(node, prefix, result);
        return result; 
    }

    delete(word, node = this.root, depth = 0) {
        if (depth === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }
        let char = word[depth];
        if (!node.children[char]) return false;

        let shouldDeleteChild = this.delete(word, node.children[char], depth + 1);

        if (shouldDeleteChild) {
            delete node.children[char]; 
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        return false;
    }
}