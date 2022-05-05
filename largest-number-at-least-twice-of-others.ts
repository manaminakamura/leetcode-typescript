function dominantIndex(nums: number[]): number {
    let maxIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= nums[maxIndex]) {
            maxIndex = i;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[maxIndex] && nums[maxIndex] < 2 * nums[i]) {
            return -1;
        }
    }
    return maxIndex;
};
