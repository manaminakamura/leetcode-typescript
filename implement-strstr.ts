function strStr(haystack: string, needle: string): number {
    let hayarr = haystack.split("");
    let needlearr = needle.split("");
    for(let i = 0; i < hayarr.length; i++) {
        if(hayarr[i] === needlearr[0]) {
            let matchlen = 0;
            for(let j = 0; j < needlearr.length; j++) {
                if(hayarr.length > i + j && hayarr[i + j] === needlearr[j]) {
                    matchlen++;
                }
            }
            if(matchlen === needlearr.length) {
                return i;
            }
        }
    }
    return -1;
};
