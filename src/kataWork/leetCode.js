import { concat, indexOf, map, remove, split } from "lodash"
var ohm = require("ohm-js")

export function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

export function reverseNum(integer) {
  let reversed = ""
  let asString = integer.toString()
  for (var i = asString.length - 1; i >= 0; i--) {
    reversed += asString[i]
  }
  if (asString[0] === "-") {
    reversed = -1 * parseInt(reversed)
  } else {
    reversed = parseInt(reversed)
  }
  if (reversed <= 2147483647 && reversed >= -2147483648) {
    return reversed
  } else {
    return 0
  }
}

export function restoreString(s, indices) {
  let orderedString = [] // JS allows for dynamic arrays filling with <emptyObject>
  for (var i = 0; i < indices.length; i++) {
    let targetLetter = s[i]
    orderedString[indices[i]] = targetLetter
  }
  return orderedString.reduce((acc, char) => acc + char, "")
}

export function howManySmaller(nums) {
  let arrayOfLessers = []
  for (var num of nums) {
    let accum = 0
    for (var check of nums) {
      if (check < num) {
        accum += 1
      }
    }
    arrayOfLessers.push(accum)
  }
  return arrayOfLessers
}

export function maxProduct(nums) {
  let sortedArray = nums.sort((a, b) => a - b)
  return (sortedArray[sortedArray.length - 1] - 1) * (sortedArray[sortedArray.length - 2] - 1)
}

export function commonChars(A) {
  // [{b: 1, c: 2}, {c:3 , d: 2}]
  // [{c : 1}]
  let counts = A.map((word) =>
    word.split("").reduce((count, letter) => {
      count[letter] = count[letter] ? count[letter] + 1 : 1
      return count
    }, {})
  )
  let concatArray = []
  if (counts.length === 0) {
    return []
  }

  for (var letterToCheck of Object.keys(counts[0])) {
    let smallestNumber = Math.min(...counts.map((count) => count[letterToCheck]))
    if (smallestNumber > 0) {
      for (var i = smallestNumber; i > 0; i--) {
        concatArray.push(letterToCheck)
      }
    }
  }
  // ["c", "c"]
  return concatArray
}

export function sortedSquares(nums) {
  let squared = nums.map((int) => int * int)
  return squared.sort((a, b) => {
    return a - b
  })
}
// comments

export function relativeSort(arr1, arr2) {
  let returnArray = []
  for (var int of arr2) {
    while (arr1.indexOf(int) > -1) {
      returnArray = returnArray.concat(arr1.splice(arr1.indexOf(int), 1))
    }
  }
  return returnArray.concat(arr1)
}

export function threeOdds0(arr) {
  let isOdd = (int) => int % 2 > 0

  for (var i = 0; i < arr.length; i++) {
    if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
      return true
    }
  }
  return false
}

export function threeOdds(arr) {
  let isOdd = (x) => x % 2 > 0
  return arr.reduce((isThreeConsec, int, idx) => {
    return isThreeConsec || (isOdd(int) && isOdd(arr[idx + 1]) && isOdd(arr[idx + 2]))
  }, false)
}

export function trimMean0(arr) {
  let newArr = arr
  let toRemove = arr.length * 0.05
  for (var i = 0; i < toRemove; i++) {
    let max = Math.max(...newArr)
    let min = Math.min(...newArr)
    // console.log("new length", newArr.length, max, min)
    newArr.splice(newArr.indexOf(max), 1)
    newArr.splice(newArr.indexOf(min), 1)
  }
  return newArr.reduce((accum, next) => accum + next, 0) / newArr.length
}

export function trimMean(arr) {
  let sortedArray = arr.sort((a, b) => a - b)
  let toRemove = arr.length * 0.05
  for (var i = 0; i < toRemove; i++) {
    sortedArray.pop()
    sortedArray.shift()
  }

  return sortedArray.reduce((accum, next) => accum + next / sortedArray.length, 0)
}

export function goatLatin(S) {
  let arrayOfWords = S.split(" ")
  let vowels = ["a", "e", "i", "o", "u"]
  let vowelStart = (x) => vowels.includes(x[0].toLowerCase())
  let notVowel = (x) => {
    return x.substring(1, x.length) + x[0] + "ma"
  }

  return arrayOfWords
    .reduce((accum, word, idx) => {
      if (vowelStart(word)) {
        return accum + word + "ma" + "a".repeat(idx + 1) + " "
      } else {
        return accum + notVowel(word) + "a".repeat(idx + 1) + " "
      }
    }, "")
    .slice(0, -1)
}

export function singleNumber(nums) {
  let numCount = {}
  nums.map((num) => (numCount[num] ? (numCount[num] += 1) : (numCount[num] = 1)))
  return parseInt(Object.keys(numCount).filter((key) => numCount[key] === 1)[0])
} // maybe rewrite using a single (first, second) comparison filter?

export function isAnagramNaive(s, t) {
  let sortedStr0 = [...s].sort((a, b) => a.localeCompare(b)).join("")
  let sortedStr1 = [...t].sort((a, b) => a.localeCompare(b)).join("")
  return sortedStr0 === sortedStr1 ? true : false
}

export function isAnagram(s, t) {
  let sortedStr0 = [...s].sort().join("")
  let sortedStr1 = [...t].sort().join("")
  return sortedStr0 === sortedStr1 ? true : false
}

export function reverseOnlyLetters(S) {
  let splitArray = S.split("")
  let reversedLetters = splitArray.filter((char) => /[a-zA-Z]/.test(char)).reverse()
  splitArray.map((char, idx) => {
    if (!/[a-zA-Z]/.test(char)) {
      reversedLetters.splice(idx, 0, char)
    }
  })
  return reversedLetters.join("")
}

export function addDigits(num) {
  let splitToStrings = (y) => y.toString().split("")
  let stringReduce = (x) =>
    x.reduce((accum, next) => {
      return accum + parseInt(next)
    }, 0)
  let reduced = stringReduce(splitToStrings(num))
  while (reduced > 9) {
    reduced = stringReduce(splitToStrings(reduced))
  }
  return reduced
}

export function sortNames(arrayOfStrings) {
  let sorted = arrayOfStrings.sort((a, b) => a.localeCompare(b))
  return sorted
}

export function luckyNumber0(arr) {
  let numberCount = {}
  let arrayOfLuckyNums = []
  arr.forEach((int) => {
    numberCount[int] = numberCount[int] ? numberCount[int] + 1 : 1
  })
  Object.keys(numberCount).map((numKey) => {
    if (parseInt(numKey) === numberCount[numKey]) {
      arrayOfLuckyNums.push(parseInt(numKey))
    }
  })
  return arrayOfLuckyNums[0] ? Math.max(...arrayOfLuckyNums) : -1
}

export function luckyNumber(arr) {
  // let numberCount = {} // { '2': 1, '3': 2, '4': 1 }
  // arr.forEach((int) => {
  //   numberCount[int] = numberCount[int] ? numberCount[int] + 1 : 1
  // })

  let numberCounts = arr.reduce((numberCounts, int) => {
    numberCounts[int] = numberCounts[int] ? numberCounts[int] + 1 : 1
    return numberCounts
  }, {})

  let arrayOfLuckyNums = Object.keys(numberCounts).filter((possibleLuckyNum) => {
    return parseInt(possibleLuckyNum) === numberCounts[possibleLuckyNum]
  })

  return Math.max(...arrayOfLuckyNums, -1)
}

export function findSpecialInteger0(arr) {
  let integerCounts = arr.reduce((integerCounts, int) => {
    integerCounts[int] = integerCounts[int] ? integerCounts[int] + 1 : 1
    return integerCounts
  }, {})
  return parseInt(Object.keys(integerCounts).filter((int) => integerCounts[int] > arr.length / 4))
}

export function findSpecialInteger(arr) {
  let getOccurrence = (array, value) => {
    return array.filter((v) => v === value).length
  }
  for (var int of arr) {
    if (getOccurrence(arr, int) > arr.length / 4) {
      return int
    }
  }
}

export function countOddsTernary(low, high) {
  let difference = high - low
  let isOdd = (int) => (int % 2 !== 0 ? true : false)
  if (!isOdd(low) && !isOdd(high)) {
    return difference / 2
  }
  return isOdd(low) && isOdd(high) ? difference / 2 + 1 : Math.floor(difference / 2) + 1
} // speed > 75.58%, memory < 50.58%

export function countOdds(low, high) {
  let difference = high - low
  let isOdd = (int) => int % 2 !== 0
  let bothAreOdd = isOdd(low) && isOdd(high)
  let neitherAreOdd = !isOdd(low) && !isOdd(high)
  if (bothAreOdd) {
    if (low === high) {
      return 1
    } else {
      return difference / 2 + 1
    }
  } else if (neitherAreOdd) {
    if (low === high) {
      return 0
    } else {
      return Math.floor(difference / 2)
    }
  } else {
    return Math.floor(difference / 2) + 1
  }
} // speed > 85.47%, memory < 50.58%

export function reformatString(s) {
  let arrOfInts = []
  let arrOfLetters = []
  let r = new RegExp(/[a-zA-Z]/)
  for (let i = 0; i < s.length; i++) {
    r.test(s[i]) ? arrOfLetters.push(s[i]) : arrOfInts.push(s[i])
  }
  let shorter = []
  let longer = []
  if (Math.abs(arrOfInts.length - arrOfLetters.length) > 1) {
    return "" // + / - 1
  }
  if (arrOfInts.length > arrOfLetters.length) {
    longer = arrOfInts
    shorter = arrOfLetters
  } else {
    longer = arrOfLetters
    shorter = arrOfInts
  }

  return longer.reduce((accum, next, idx) => {
    return shorter[idx] ? accum + next + shorter[idx] : accum + next
  }, "")
}

export function missingInts(arr, k) {
  let missCounter = 0
  for (var i = 1; 0 < arr.length; i++) {
    if (missCounter === k) {
      return i - 1
    } else if (!arr.includes(i)) {
      missCounter += 1
    }
  }
}

export function countChars(str) {
  let objOfCounts = {}
  for (var i = 0; i < str.length; i++) {
    objOfCounts[str[i]] = objOfCounts[str[i]] ? objOfCounts[str[i]] + 1 : 1
  }
  return objOfCounts
}

export function mockingCase(str) {
  let arrOfLetters = str.split("")
  return arrOfLetters.reduce((accum, letter, idx) => {
    if (idx === 0) {
      return accum + letter.toLowerCase()
    } else if (idx % 2 !== 0) {
      return accum + letter.toUpperCase()
    } else {
      return accum + letter.toLowerCase()
    }
  }, "")
}

export function consecutiveOnes(nums) {
  let currentCount = 0
  let highestCount = 0

  for (var i = 0; i < nums.length; i++) {
    let current = nums[i]
    if (current === 1) {
      currentCount++
    } else {
      currentCount = 0
    }
    highestCount = Math.max(currentCount, highestCount)
  }
  return highestCount
}

export function getObject(objectForTest) {
  let arrayOfVariantObjs = []
  objectForTest.Product.variants.forEach((variant) => {
    if (variant.Variant.inventory && variant.Variant.shipping) {
      arrayOfVariantObjs.push({
        // current practice is using SKU to update inventory
        // see https://merchant.wish.com/documentation/api/v2#how-to-update-inventory,
        productID: variant.Variant.sku,
        sku: variant.Variant.sku,
        title: objectForTest.Product.name,
      })
    }
  })
  return arrayOfVariantObjs
}

export function startBatchDownload(access_token) {
  // step 1: request batch download
  fetch(`https://merchant.wish.com/api/v2/product/create-download-job?access_token=${access_token}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response: " + response.data.job_id)

      // step 2: execute asynchronous long-running polling process to check status
      // since wish updated to v2 api, batch download is currently processed through batch CSV download
      // see https://merchant.wish.com/documentation/api/v2#product-create-download-job
    })
}

export function batchStatus(access_token, job_id) {
  // step 3: confirm download link is returned

  fetch(
    `https://merchant.wish.com/api/v2/product/get-download-job-status?access_token=${access_token}&job_id=${job_id}`,
    {
      method: "POST",
    }
  )
    .then((res) => res.json())
    .then((response) => {
      if (response.data.download_link) {
        // step 4: use link to download batch CSV file
        fetch(`${response.data.download_link}?access_token=${access_token}`, {
          method: "GET",
        })
        // step 5 .then(=> parse CSV to JSON)
      }
    })
}

export function checkAnagram(str0, str1) {
  return str0.split("").sort().join() === str1.split("").sort().join()
}

export function keywordFormatter(string) {
  let parser = ohm.generate(`
  Arithmetic {
    start
      = title tags* number " " number
    title = (letter | " ")+
    tags = "[" (letter | " ")+ "] "
    number
      =  digit+
  }`)
  let s = parser.createSemantics(s.addOperation)
  let result = ohm.match(string)
}

export function titleSplit(string) {
  let objectToReturn = {}
  let splitStrings = string.split(" ")
  let titleKey = ""
  let arrayOfKeywords = []
  splitStrings.forEach((element) => {
    if (element[0] !== "[" && !parseInt(element)) {
      titleKey += " " + element
    } else if (element[0] === "[") {
      arrayOfKeywords.push(element.substring(1, element.length - 1))
    }
  })
  objectToReturn.upvotes = parseInt(splitStrings[splitStrings.length - 1])
  objectToReturn.views = parseInt(splitStrings[splitStrings.length - 2])
  objectToReturn.keywords = arrayOfKeywords
  objectToReturn.title = titleKey.substring(1)
  return objectToReturn
}

export function analyticsAccum(arrayOfStrings) {
  let arrayOfObjects = []
  arrayOfStrings.forEach((string) => arrayOfObjects.push(titleSplit(string)))
  return arrayOfObjects.sort((a, b) => b.views - a.views)
}

export function arrayShuffle(nums, n) {
  let counter = 0
  let left = nums
  let right = left.splice(n, n)
  // console.log("split arrays: ", left, right)
  right.forEach((num, idx) => {
    counter++
    // console.log(num)
    left.splice(counter + idx, 0, num)
  })
  return left
}

export function maxNumber(num) {
  let splitNum = num.toString().split("")
  for (var i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === "6") {
      splitNum.splice(i, 1, "9")
      return parseInt(splitNum.join(""))
    }
  }
  return parseInt(splitNum.join(""))
}

export function sumOfUnique(nums) {
  let numCoda = {}
  nums.forEach((num) => {
    numCoda[num] = numCoda[num] ? numCoda[num] + 1 : 1
  })
  return Object.keys(numCoda).reduce((accum, key) => {
    if (numCoda[key] === 1) {
      return accum + parseInt(key)
    } else {
      return accum
    }
  }, 0)
}

export function averagePay(salary) {
  let sorted = salary.sort((a, b) => {
    return a - b
  })
  sorted.shift()
  sorted.pop()
  return sorted.reduce((accum, next) => accum + next) / sorted.length
}

export function reverseString(s) {
  return s.reverse()
}

export function intersectionOfArrays(nums1, nums2) {
  let interSet = new Set()
  nums1.forEach((num) => {
    if (nums2.includes(num)) {
      interSet.add(num)
    }
  })
  return Array.from(interSet)
}

export function missingNums(nums) {
  var setOfExisting = new Set(nums)
  var arrayOfMissing = []
  var len = nums.length
  for (let i = 1; i <= len; i++) {
    if (!setOfExisting.has(i)) arrayOfMissing.push(i)
  }
  return arrayOfMissing
}

export function palindromeNumber(x) {
  let char = x.toString()
  let i = 0
  let j = char.length - 1

  while (i <= j) {
    if (!(char[i++] === char[j--])) {
      return false
    }
  }
  return true
}

export function removeVal(nums, val) {
  for (var i = nums.length; i--; ) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

export function arrayStringsAreEqual(word1, word2) {
  return word1.join("") === word2.join("") ? true : false
}

export function consistentStrings(allowed, words) {
  let counter = 0
  words.forEach((str) => {
    let isConsistent = true
    for (var i = 0; i < str.length; i++) {
      if (!allowed.includes(str[i])) {
        isConsistent = false
      }
    }
    return isConsistent ? counter++ : null
  })
  return counter
}

// range 0, 3 + should === 6
// get largest number (largest)
// add up range 0 - largest (sum)
// return sum - nums

// write a range loop with two consequents; adding all [i]s in rangeX, then add all nums[i]s and subtract

// reduce into an object
// FOREACH NOT MAP
// list of values to convert to a boolean? try a reduce (many > one)
// set, spread, reduce, splice
// practice refactoring
// arr.sort(...).filter(...).reduce(sum) / arr.length
// practice immutable code
//linked in map vs foreach

// nums.forEach((num, idx) => {
//   if (num === val) {
//     nums.splice(idx, 1)
//     console.log(nums)
//   }
// })
