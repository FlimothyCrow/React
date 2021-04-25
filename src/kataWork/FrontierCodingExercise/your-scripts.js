export function intToRoman(int) {
  if (!parseInt(int) || int >= 4000) {
    return "invalid input"
  }

  var arrayOfInts = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var arrayOfRomanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  var stringToReturn = ""
  for (var i = 0; i < arrayOfInts.length; i++) {
    while (arrayOfInts[i] <= int) {
      stringToReturn += arrayOfRomanNums[i]
      int -= arrayOfInts[i]
    }
  }

  return stringToReturn
}
