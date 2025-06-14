class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode;
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]) return false;
            node = node.children[ch];
        }
        return node.isEnd;
    }

    startsWith(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch]) return false;
            node = node.children[ch];
        }
        return true;
    }

    delete(word, node = this.root, depth = 0){
        if(depth === word.length){
            if(!node.isEnd) return false;
            node.isEnd = false;
            return Object.keys(node.children).length === 0;
        }

            let ch = word[depth];
            if(!node.children[ch]) return false;

            let del = this.delete(word, node.children[ch], depth+1)

            if(del){
                delete node.children[ch];
                return Object.keys(node.children).length === 0 && !node.isEnd
            }
    }

    findNode(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]) return null;
            node = node.children[ch];
        }
        return node;
    }

    collectWords(prefix, node = this.root, result){
        if(node.isEnd) result.push(prefix);

        for(let ch in node.children){
            this.collectWords(prefix+ch, node.children[ch], result)
        }
    }

    auto(prefix){
        let node = this.findNode(prefix);
        if(!node) return [];
        let result = [];

        this.collectWords(prefix, node, result);
        return result;
    }

    replace(newWord , old){
        if(!this.search(old)) return null;

        this.delete(old);
        this.insert(newWord)
    }

    countWords(node = this.root){
        let count = 0;
        if(node.isEnd) count++;

        for(let ch in node.children){
            count += this.countWords(node.children[ch])
        }
        return count;
    }
}


const t = new Trie();

t.insert('word')
t.insert('walk')
t.insert('book')
t.insert('books')


t.replace('wood', 'book')


console.log(t.countWords());
