function isValid(s: string): boolean {
    const cArr: Array<string> = s.split("");
    const stack: Array<string> = [];
    for(const c of cArr) {
        if(map[c] !== undefined) {
            stack.push(c);
        } else {
            if(stack.length === 0) {
                return false;
            }
            const open = stack.pop();
            if(map[open] !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]"
};
