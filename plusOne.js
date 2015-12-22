/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var result = [];
    var innerFunc = function(arr){
        var num = arr.length - 1;
        arr[num] += 1;
        if(arr[num]===10){
            result.unshift(0);
            if(num===0){
                result.unshift(1);
            }else{
                innerFunc(arr.slice(0,num));
            }
        }else{
            result= arr.concat(result);
        }
    }
    innerFunc(digits);
    return result;
};