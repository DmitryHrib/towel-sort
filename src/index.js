
// You should implement your task here.

module.exports = function towelSort (matrix) {  
  const array = [];
  if (matrix == undefined) {
    return array
    } else {  
  for (i = 0; i < matrix.length; i++) {    
    for (j = 0; j < matrix[i].length; j++) {     
      let lev = i % 2 === 0 
        ? array.push(matrix[i][j])
        : array.push((matrix[i][matrix[i].length - j - 1]));
      }            
    }
  }   
  return array;
}