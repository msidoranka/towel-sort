module.exports = function towelSort (matrix) {
  let resultArray = [];
  if (!matrix || matrix.length === 0) {return [];}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if(matrix === 0) return [];
      if (j === matrix.length - 1) {
        resultArray = resultArray.concat(resultArray[i][j]);
      }
      else resultArray = resultArray.concat(resultArray[i][j]) + ',';
    }
  }
  return resultArray;
}
