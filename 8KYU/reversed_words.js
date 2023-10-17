/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
    let res = []
    let arr = str.split(" ")
    for (let i = arr.length - 1; i >= 0; i--) {
      res.push(arr[i])
    }
    return res.join(" ")
}