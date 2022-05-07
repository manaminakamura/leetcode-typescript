function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};
