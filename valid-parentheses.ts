function isValid(s: string): boolean {
    const array: Array<string> = s.split("");
    const stack: Array<string> = [];
    while(array.length > 0) {
        if(stack.length > 0 && validPairs[array[array.length - 1]] === stack[stack.length - 1]) {
            array.pop();   
            stack.pop();
        } else {
            const item = array.pop();
            stack.push(item);
        }
    }
    return stack.length === 0;
};

const validPairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]"
};
