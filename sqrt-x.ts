function mySqrt(x: number): number {
    if(x < 2) return x;
    let left = 2;
    let right = x;
    while(left <= right) {
        let num = left + Math.floor((right - left) / 2);

        if(num * num === x) {
            return num;
        } else if((num - 1) * (num - 1) < x && num * num > x) {
            return num - 1;
         } else if(num * num > x && (num + 1) * (num + 1) < x) {
            return num;
        } else if(num * num > x) {
            right = num - 1;
        } else {
            left = num + 1;
        }
    }
};
