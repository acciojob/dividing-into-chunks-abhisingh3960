const divide = (arr, n) => {
  const result = [];
  let currentSubArray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num > n) {
      result.push(currentSubArray);
      currentSubArray = [];
      currentSum = 0;
    }
    currentSubArray.push(num);
    currentSum += num;
  }

  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }

  return result;
};