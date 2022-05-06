function replaceWords(dictionary: string[], sentence: string): string {
    const trie = new TrieNode();
    dictionary.forEach((root) => {
        let cur = trie;
        for(const letter of root) {
            if(!cur.children[letter]) {
                cur.children[letter] = new TrieNode();
            }
            cur = cur.children[letter];
        }
        cur.word = root;
    });
    const words = sentence.split(" ");
    const ans = new Array();
    for(const word of words) {
        let cur = trie;
        for(const letter of word) {
            if(!cur.children[letter] || cur.word) {
                break;
            }
            cur = cur.children[letter];
        }
        ans.push(cur.word ? cur.word : word);
    }
    return ans.join(" ");
};

class TrieNode {
    children: TrieNode[] | null;
    word: string;
    constructor(){
        this.children = new Array();
    }
}
