export function repeatingString(smallString, firstN, toCount) {
  var timesToRepeat =
    Math.floor(firstN / smallString.length) + (firstN % smallString.length);
  var longString = smallString.repeat(timesToRepeat);
  var counter = 0;
  for (var char = 0; char < firstN; char++) {
    if (longString[char] === toCount) {
      counter += 1;
    }
  }
  return counter;
}

export function sumNestedArrays(nestedArrays) {
  var accumulate = 0
  for (var array = 0; array < nestedArrays.length; array++) {
    for (var int of nestedArrays[array]) {
      accumulate += int
    }
  }
  return accumulate
}

