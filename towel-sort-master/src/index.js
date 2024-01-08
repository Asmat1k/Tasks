module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix == undefined)
    return res;
  else
    for(let i=0; i<matrix.length; i++) {
      if(i%2!=0)
        matrix[i].sort(function(a,b) {
          return b-a;
        });
      for(let j=0; j<matrix[i].length; j++) 
        res.push(matrix[i][j]);
    }
  return res;
}

