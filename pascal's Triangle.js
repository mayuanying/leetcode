/**
 *  Given numRows, generate the first numRows of Pascal's triangle.

 *  For example, given numRows = 5,
 *  Return

 *  [
 *       [1],
 *      [1,1],
 *     [1,2,1],
 *    [1,3,3,1],
 *   [1,4,6,4,1]
 *  ]
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    if(numRows===0) return result;
    else result = generate(numRows-1);
    var arr = [];
    for(var m=1;m<=numRows;m++){
        arr.push(getNum(numRows,m,result[result.length-1]));
    }
    result[numRows-1]=arr;
    return result;
};
function getNum(n,m,prev){
    if(m === 1) return 1;
    else if(m === n) return 1;
    else return prev[m-2]+prev[m-1];
}
// var generate = function(numRows) {
//     var result = [];
//     for(var i=1;i<=numRows;i++){
//         var arr = [];
//         for(var m=1;m<=i;m++){
//             arr.unshift(getNum(i,m));
//         }
//         result[i-1]=arr;
//     }
//     return result;
// };
// function getNum(n,m){
//     if(m === 1) return 1;
//     else if(m === n) return 1;
//     else return getNum(n-1,m-1)+getNum(n-1,m);
// }