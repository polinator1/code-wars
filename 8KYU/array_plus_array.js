/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0
    let sum2 = 0
    
    arr1.forEach(nums => {
      sum1 += nums
    })
    
    arr2.forEach(nums => {
      sum2 += nums
    })
    return sum1 + sum2
}