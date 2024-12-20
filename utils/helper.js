// this fun compair the array of object property with an array element return an array of bool
export const objToArrayCompair = (arrayOfObj, comparisonArr) => {
  const newArrayObj = arrayOfObj.map((item, index) => {
    return item["ans"] == comparisonArr[index]
      ? true
      : comparisonArr[index] == null
      ? null
      : false;
  });
  return newArrayObj;
};
