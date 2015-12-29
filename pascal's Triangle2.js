/**
 *  Given an index k, return the kth row of the Pascal's triangle.

 *  For example, given k = 3,
 *  Return [1,3,3,1].

 * Note: Could you optimize your algorithm to use only O(k) extra space?
 
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [1];
    for(var i = 1; i <= rowIndex; i++){
        for(var j = i; j >= 0; j--){
            if (j === i) arr[j] = arr[j-1];
            else if (j === 0) arr[j] = arr[j];
            else arr[j] = arr[j-1] + arr[j];
        }
    }
    return arr;
};