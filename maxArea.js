function maxArea(arr) {
    let max = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            let area = 0;
            if (arr[i] > arr[j]) {
                area = (j - i) * arr[j];
            } else {
                area = (j - i) * arr[i];
            }
            if (area > max) max = area;
        }
    }
    return max;
}