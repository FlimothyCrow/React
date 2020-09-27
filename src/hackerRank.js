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


export function reduceNestedArrays(nestedArrays) {
  if (nestedArrays.length === 0) {
    return 0;
  }
  let sum = 0;
  for (var element of nestedArrays) {
    if (Array.isArray(element)) {
      // if there's more work to do
      sum += reduceNestedArrays(element);
    } else {
      sum += element;
    }
  }
  return sum;
}
// .reduce() won't work on nested arrays

export function reduceListOne(input) {
  if (input === null) {
    return 0;
  } // implicitly defines input.length variables
  return input[0] + reduceListOne(input[1]);
}

export function reduceList(input) {
  if (input === null) {
    return 0;
  }
  return input.val + reduceList(input.next);
}


export function reduceTreeAcc(input) {
  let acc = 0;
  let nodes = [input];
  while (nodes.length > 0) {
    //console.log(nodes.length);
    input = nodes.pop();
    if (input === null) {
      continue;
    }
    acc += input.val;
    nodes.push(input.left);
    nodes.push(input.right);
  }
  return acc; // Math.max(leftSum, rightSum)
}


export function lengthNestedArrays(input) {
  if (input === null) {
    return 0;
  }
  return 1 + lengthNestedArrays(input.next);
}

// reduceTree(input: Tree) : number           <- typeScript
export function lengthTree(input) {
  if (input === null) {
    return 0;
  }
  return 1 + Math.max(lengthTree(input.left), lengthTree(input.right));
}

