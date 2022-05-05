function pivotIndex(nums: number[]): number {
    let rightSum = 0;
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }

    for(let i = 0; i < nums.length; i++) {
        leftSum += i > 0 ? nums[i-1] : 0;
        rightSum -= nums[i];
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
