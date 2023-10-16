/*
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example

("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples

("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes

The two strings will be the same length.
*/

function neutralise(s1, s2) {
    let newS1 = s1.split("")
    let newS2 = s2.split("")
    
    let res = []

    for (let i = 0; i < newS1.length; i++) {
      if (newS1[i] == "+" && newS2[i] == "+") {
        res.push("+")
      } else if (newS1[i] == "-" && newS2[i] == "-") {
        res.push("-")
      } else {
        res.push("0")
      }
    }
    return res.join("")
}