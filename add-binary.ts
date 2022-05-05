function addBinary(a: string, b: string): string {
    const arrayA = a.split("");
    const arrayB = b.split("");
    const result = new Array();
    let length = a.length;
    if(arrayA.length < arrayB.length) {
        length = b.length;
    }
    let carry = 0;
    for(let i = 0; i < length; i++) {
        let numA = 0;
        let numB = 0;
        if(arrayA.length - 1 - i >= 0) {
            numA = Number(arrayA[arrayA.length - 1 - i]);
        }
        if(arrayB.length - 1 - i >= 0) {
            numB = Number(arrayB[arrayB.length - 1 - i]);
        }
        const num = (numA + numB + carry) % 2;
        result.push(num);
        carry = Math.floor((numA + numB + carry) / 2);
    }
    if(carry === 1) result.push(1);
    return result.reverse().join("");
};
