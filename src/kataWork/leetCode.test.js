import {
  restoreString,
  commonChars,
  howManySmaller,
  sortedSquares,
  maxProduct,
  twoSum,
  reverseNum,
  relativeSort,
  heightCheck,
  removePairs,
  threeOdds,
  removePairs1,
  getOccurrence,
  threeOdds0,
  trimMean,
  goatLatin,
  singleNumber,
  isAnagram,
  reverseOnlyLetters,
  addDigits,
  sortNames,
  moveZeroes,
  luckyNumber,
  findSpecialInteger,
  findSpecialInteger0,
  findSpecialInteger1,
  countOdds,
  reformatString,
  missingInts,
  countChars,
  mockingCase,
  consecutiveOnes,
  missingInt,
  checkAnagram,
  titleSplit,
  viewsAndUpvotes,
  keywordFormatter,
  analyticsAccum,
  getObject,
  arrayShuffle,
  maxNumber,
  sumOfUnique,
  reverseString,
  averagePay,
  intersectionOfArrays,
  missingNums,
  palindromeNumber,
  removeVal,
  secondLargest,
  arrayStringsAreEqual,
  consistentStrings,
  runningSums,
  defangIP,
  maxWealth,
  jewelsAndStones,
  alternateBits,
} from "./leetCode.js"

test("twoSum 9", () => {
  let arrayOfInts = [2, 15, 10, 7]
  var evaluated = twoSum(arrayOfInts, 9)
  expect(evaluated).toEqual([0, 3])
})

test("twoSum 10", () => {
  let arrayOfInts = [5, 2, 5, 7]
  var evaluated = twoSum(arrayOfInts, 10)
  expect(evaluated).toEqual([0, 2])
})

test("reverse 4321", () => {
  var evaluated = reverseNum(1234)
  expect(evaluated).toEqual(4321)
})

test("reverse -159", () => {
  var evaluated = reverseNum(-159)
  expect(evaluated).toEqual(-951)
})

test("reverse positive overflow", () => {
  var evaluated = reverseNum(2147483648)
  expect(evaluated).toEqual(0)
})

test("reverse negative overflow", () => {
  var evaluated = reverseNum(-2147483649)
  expect(evaluated).toEqual(0)
})
//-------------------------------------------------
test("restore string rat", () => {
  var evaluated = restoreString("art", [1, 0, 2])
  expect(evaluated).toEqual("rat")
})

test("restore string abc", () => {
  var evaluated = restoreString("abc", [0, 1, 2])
  expect(evaluated).toEqual("abc")
})

test("restore string leetcode", () => {
  var evaluated = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
  expect(evaluated).toEqual("leetcode")
})

test("restore string nihao", () => {
  var evaluated = restoreString("aiohn", [3, 1, 4, 2, 0])
  expect(evaluated).toEqual("nihao")
})

test("restore string arigatou", () => {
  var evaluated = restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5])
  expect(evaluated).toEqual("arigatou")
})

test("restore string 1", () => {
  var evaluated = restoreString("x", [0])
  expect(evaluated).toEqual("x")
})
//-------------------------------------------------
test("howManySmaller 0", () => {
  var evaluated = howManySmaller([8, 1, 2, 2, 3])
  expect(evaluated).toEqual([4, 0, 1, 1, 3])
})

test("howManySmaller 1", () => {
  var evaluated = howManySmaller([7, 7, 7, 7])
  expect(evaluated).toEqual([0, 0, 0, 0])
})
//-------------------------------------------------

test("maxProduct 12", () => {
  var evaluated = maxProduct([3, 4, 5, 2])
  expect(evaluated).toEqual(12)
})

test("maxProduct 16", () => {
  var evaluated = maxProduct([1, 5, 4, 5])
  expect(evaluated).toEqual(16)
})
//-------------------------------------------------
test("commonChars 0", () => {
  var evaluated = commonChars(["bella", "label", "roller"])
  expect(evaluated).toEqual(["e", "l", "l"])
})

test("commonChars 1", () => {
  var evaluated = commonChars(["cool", "lock", "cook"])
  expect(evaluated).toEqual(["c", "o"])
})
//-------------------------------------------------

test("sorted squares", () => {
  var evaluated = sortedSquares([-4, -1, 0, 3, 10])
  expect(evaluated).toEqual([0, 1, 9, 16, 100])
})

test("sorted squares 0", () => {
  var evaluated = sortedSquares([-7, -3, 2, 3, 11])
  expect(evaluated).toEqual([4, 9, 9, 49, 121])
})

// comments

test("relativeSort", () => {
  var evaluated = relativeSort([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
  expect(evaluated).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
})
//-------------------------------------------------
/*
test("heightCheck", () => {
  var evaluated = heightCheck([1, 1, 4, 2, 1, 3])
  expect(evaluated).toEqual(3)
})


test("heightCheck", () => {
  var evaluated = heightCheck([1, 2, 3, 4, 5])
  expect(evaluated).toEqual(0)
})

test("heightCheck", () => {
  var evaluated = heightCheck([5, 1, 2, 3, 4])
  expect(evaluated).toEqual(5)
})
*/

//-------------------------------------------------

test("threeOdds false", () => {
  var evaluated = threeOdds0([2, 6, 4, 3])
  expect(evaluated).toEqual(false)
})

test("threeOdds true", () => {
  var evaluated = threeOdds0([1, 2, 34, 3, 4, 5, 7, 23, 12])
  expect(evaluated).toEqual(true)
})

test("trimMean", () => {
  var evaluated = trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
  expect(evaluated).toEqual(4.0)
})
//-------------------------------------------------
test("goatLatin 0", () => {
  var evaluated = goatLatin("I speak Goat Latin")
  expect(evaluated).toEqual("Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
})

test("goatLatin 1", () => {
  var evaluated = goatLatin("The quick brown fox jumped over the lazy dog")
  expect(evaluated).toEqual(
    "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
  )
})

test("goatLatin 2", () => {
  var evaluated = goatLatin("A x gij T Ka Stsl UTK kqdc A")
  expect(evaluated).toEqual(
    "Amaa xmaaa ijgmaaaa Tmaaaaa aKmaaaaaa tslSmaaaaaaa UTKmaaaaaaaa qdckmaaaaaaaaa Amaaaaaaaaaa"
  )
})
//-------------------------------------------------
test("singleNumber 0", () => {
  var evaluated = singleNumber([4, 1, 2, 1, 2])
  expect(evaluated).toEqual(4)
})

test("singleNumber 1", () => {
  var evaluated = singleNumber([2, 2, 1])
  expect(evaluated).toEqual(1)
})

test("isAnagram 0", () => {
  var evaluated = isAnagram("car", "cta")
  expect(evaluated).toEqual(false)
})

test("isAnagram 1", () => {
  var evaluated = isAnagram("anagram", "nagaram")
  expect(evaluated).toEqual(true)
})

test("isAnagram 2", () => {
  var evaluated = isAnagram("aacc", "ccac")
  expect(evaluated).toEqual(false)
})

test("reverseOnlyLetters 0", () => {
  var evaluated = reverseOnlyLetters("ab-cd")
  expect(evaluated).toEqual("dc-ba")
})

test("reverseOnlyLetters 1", () => {
  var evaluated = reverseOnlyLetters("a-bC-dEf-ghIj")
  expect(evaluated).toEqual("j-Ih-gfE-dCba")
})

test("reverseOnlyLetters 2", () => {
  var evaluated = reverseOnlyLetters("Test1ng-Leet=code-Q!")
  expect(evaluated).toEqual("Qedo1ct-eeLg=ntse-T!")
})
// ---------------------------------------------
test("addDigits 0", () => {
  var evaluated = addDigits(38)
  expect(evaluated).toEqual(2)
})

test("addDigits 1", () => {
  var evaluated = addDigits(5522)
  expect(evaluated).toEqual(5)
})

test("addDigits 2", () => {
  var evaluated = addDigits(10)
  expect(evaluated).toEqual(1)
})

test("addDigits 2", () => {
  var evaluated = addDigits(11)
  expect(evaluated).toEqual(2)
})
// ---------------------------------------------
test("sortNames 0", () => {
  var evaluated = sortNames(["bill taylor", "mook jerkington", "adam west"])
  expect(evaluated).toEqual(["adam west", "bill taylor", "mook jerkington"])
})
// ---------------------------------------------

test("luckyNumber 0", () => {
  var evaluated = luckyNumber([2, 2, 3, 4])
  expect(evaluated).toEqual(2)
})

test("luckyNumber 1", () => {
  var evaluated = luckyNumber([2, 2, 2, 3, 3])
  expect(evaluated).toEqual(-1)
})

test("luckyNumber 2", () => {
  var evaluated = luckyNumber([7, 7, 7, 7, 7, 7, 7])
  expect(evaluated).toEqual(7)
})

test("luckyNumber 3", () => {
  var evaluated = luckyNumber([5])
  expect(evaluated).toEqual(-1)
})

test("findSpecialInteger", () => {
  var evaluated = findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])
  expect(evaluated).toEqual(6)
})

test("countOdds 0", () => {
  var evaluated = countOdds(3, 7)
  expect(evaluated).toEqual(3)
})

test("countOdds 1", () => {
  var evaluated = countOdds(3, 13)
  expect(evaluated).toEqual(6)
})

test("countOdds 2", () => {
  var evaluated = countOdds(3, 12)
  expect(evaluated).toEqual(5)
})

test("countOdds 3", () => {
  var evaluated = countOdds(4, 11)
  expect(evaluated).toEqual(4)
})

test("countOdds 4", () => {
  var evaluated = countOdds(4, 12)
  expect(evaluated).toEqual(4)
})

test("countOdds 5", () => {
  var evaluated = countOdds(10, 10)
  expect(evaluated).toEqual(0)
})

test("countOdds 6", () => {
  var evaluated = countOdds(11, 11)
  expect(evaluated).toEqual(1)
})

test("reformatString 0", () => {
  var evaluated = reformatString("a0b1c2")
  expect(evaluated).toEqual("a0b1c2")
})

test("reformatString 1", () => {
  var evaluated = reformatString("covid2019")
  expect(evaluated).toEqual("c2o0v1i9d")
})

test("reformatString 2", () => {
  var evaluated = reformatString("covid2013339")
  expect(evaluated).toEqual("")
})

test("reformatString 2", () => {
  var evaluated = reformatString("ab123")
  expect(evaluated).toEqual("1a2b3")
})

test("missingInts 0", () => {
  var evaluated = missingInts([1, 2, 3, 5, 6, 9], 2)
  expect(evaluated).toEqual(7)
})

test("missingInts 1", () => {
  var evaluated = missingInts([2, 3, 4, 7, 11], 5)
  expect(evaluated).toEqual(9)
})

test("missingInts 2", () => {
  var evaluated = missingInts([1, 2, 3, 4], 2)
  expect(evaluated).toEqual(6)
})

test("missingInts 2", () => {
  var evaluated = missingInts([5, 6, 7, 8, 9], 9)
  expect(evaluated).toEqual(14)
})

test("countChars 0", () => {
  var evaluated = countChars("bbbbbbbbbbaaaaaaaaaaakkkkkkkkkkkkeeeeeeddddddddddddddddddddddd")
  expect(evaluated).toEqual({ a: 11, b: 10, d: 23, e: 6, k: 12 })
})

test("mockingCase 0", () => {
  let targetStr = "grapevine"
  var evaluated = mockingCase(targetStr)
  // console.log(evaluated)
  expect(evaluated).toEqual("gRaPeViNe")
})

test("consecutiveOnes 0", () => {
  var evaluated = consecutiveOnes([1, 1, 0, 1, 1, 1])
  expect(evaluated).toEqual(3)
})

test("consecutiveOnes 1", () => {
  var evaluated = consecutiveOnes([1, 1, 1, 1, 0, 1, 1, 1])
  expect(evaluated).toEqual(4)
})

test("consecutiveOnes 2", () => {
  var evaluated = consecutiveOnes([0])
  expect(evaluated).toEqual(0)
})

test("consecutiveOnes 3", () => {
  var evaluated = consecutiveOnes([1])
  expect(evaluated).toEqual(1)
})

test("checkAnagram 0", () => {
  var evaluated = checkAnagram("jerk", "ekrj")
  expect(evaluated).toEqual(true)
})

test("checkAnagram 1", () => {
  var evaluated = checkAnagram("ben", "bin")
  expect(evaluated).toEqual(false)
})

test("checkAnagram 2", () => {
  var evaluated = checkAnagram("a", "A")
  expect(evaluated).toEqual(false)
})

let objectForTest = {
  code: 0,
  data: [
    {
      Product: {
        description: "Example description",
        id: "5284e18fb5baba49d5xxxxxx",
        name: "Cute Ring",
        number_saves: "6",
        number_sold: "0",
        parent_sku: "Cute Bow Ring",
        review_status: "approved",
        removed_by_merchant: false,
        default_shipping_price: "10.5",
        tags: [
          { Tag: { id: "womensring", name: "womens ring" } },
          { Tag: { id: "jewelry", name: "Jewelry" } },
          { Tag: { id: "bow", name: "Bow" } },
        ],
        variants: [
          {
            Variant: {
              color: "green",
              enabled: "True",
              id: "5284e192b111ba49d5xxxxxx",
              product_id: "5284e18fb5baba49d5xxxxxx",
              inventory: "11",
              msrp: "113.9",
              price: "110.9",
              shipping: "10.5",
              localized_price: "660.0",
              localized_shipping: "63.0",
              localized_currency_code: "CNY",
              sku: "AA1",
            },
          },
          {
            Variant: {
              color: "blue",
              enabled: "True",
              id: "5284e19qqqbaba49d5bbbbbb",
              product_id: "5284e18fb5baba49d5xxxxxx",
              inventory: "100",
              msrp: "19.9",
              price: "15.9",
              shipping: "10.5",
              localized_price: "90.0",
              localized_shipping: "63.0",
              localized_currency_code: "CNY",
              sku: "ZZ1",
            },
          },
          {
            Variant: {
              color: "black",
              enabled: "True",
              id: "5284e19qqqbaba49d5bbbbbb",
              product_id: "5284e18fb5baba49d5xxxxxx",
              inventory: null,
              msrp: "19.9",
              price: "15.9",
              shipping: null,
              localized_price: "90.0",
              localized_shipping: "63.0",
              localized_currency_code: "CNY",
              sku: "ZZ1",
            },
          },
        ],
      },
    },
  ],
  country_shippings: [
    { CountryShipping: { price: "4.99", localized_price: "30.0", localized_currency_code: "CNY", country_code: "CA" } },
    { CountryShipping: { price: "3.99", localized_price: "24.0", localized_currency_code: "CNY", country_code: "US" } },
  ],
  message: "",
  paging: {
    next:
      "https://merchant.wish.com/api/v2/product/multi-get?start=22&limit=2&since=2014-10-15&access_token=an_example_access_token",
    previous:
      "https://merchant.wish.com/api/v2/product/multi-get?start=18&limit=2&since=2014-10-15&access_token=an_example_access_token",
  },
}

test("getObject 1", () => {
  var evaluated = getObject(objectForTest.data[0])
  expect(evaluated).toEqual([
    { productID: "AA1", sku: "AA1", title: "Cute Ring" },
    { productID: "ZZ1", sku: "ZZ1", title: "Cute Ring" },
  ])
})

test.skip("keywordFormatter 0", () => {
  var evaluated = keywordFormatter("words words [mook board] [wet axe] [tobacco] 2000 50")
  expect(evaluated).toEqual("words [mook-board] [wet-axe] [tobacco] 2000 50")
})

test("titleSplit 0", () => {
  var evaluated = titleSplit("Taming the Shrew [jerk] [mook] [tobacco] [flying] 1945 50")
  expect(evaluated).toEqual({
    keywords: ["jerk", "mook", "tobacco", "flying"],
    title: "Taming the Shrew",
    upvotes: 50,
    views: 1945,
  })
})

test.skip("titleSplit 1", () => {
  var evaluated = titleSplit({}, "Fight me [fight] [dumb] [bacon cheese] 200 5")
  expect(evaluated).toEqual({
    keywords: ["fight", "dumb", "bacon-cheese"],
    title: "Fight me",
    upvotes: 5,
    views: 200,
  })
})

test("analyticsAccum 0", () => {
  var arrayOfStrings = [
    "Taming the Shrew [jerk] [mook] [tobacco] [flying] 1945 50",
    "test entry [schnook] [mackerel] [dog] 195 50",
    "words words [board] [axe] [tobacco] 2011 45",
    "Fight me [fight] [dumb] [bacon] 200 5",
  ]
  var evaluated = analyticsAccum(arrayOfStrings)
  // console.log(evaluated)
  expect(evaluated).toEqual([
    {
      upvotes: 45,
      views: 2011,
      keywords: ["board", "axe", "tobacco"],
      title: "words words",
    },
    {
      upvotes: 50,
      views: 1945,
      keywords: ["jerk", "mook", "tobacco", "flying"],
      title: "Taming the Shrew",
    },
    {
      upvotes: 5,
      views: 200,
      keywords: ["fight", "dumb", "bacon"],
      title: "Fight me",
    },
    {
      upvotes: 50,
      views: 195,
      keywords: ["schnook", "mackerel", "dog"],
      title: "test entry",
    },
  ])
})

test("arrayShuffle 0", () => {
  var evaluated = arrayShuffle([2, 5, 1, 3, 4, 7], 3)
  expect(evaluated).toEqual([2, 3, 5, 4, 1, 7])
})

test("arrayShuffle 1", () => {
  var evaluated = arrayShuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)
  expect(evaluated).toEqual([1, 4, 2, 3, 3, 2, 4, 1])
})

test("arrayShuffle 2", () => {
  var evaluated = arrayShuffle([1, 1, 2, 2], 2)
  expect(evaluated).toEqual([1, 2, 1, 2])
})

test("maxNumber 0", () => {
  var evaluated = maxNumber(9669)
  expect(evaluated).toEqual(9969)
})

test("maxNumber 1", () => {
  var evaluated = maxNumber(9999)
  expect(evaluated).toEqual(9999)
})

test("maxNumber 2", () => {
  var evaluated = maxNumber(6999)
  expect(evaluated).toEqual(9999)
})

test("maxNumber 3", () => {
  var evaluated = maxNumber(6666)
  expect(evaluated).toEqual(9666)
})

test("sumOfUnique 0", () => {
  var evaluated = sumOfUnique([1, 2, 2, 3, 4, 4])
  expect(evaluated).toEqual(4)
})

test("sumOfUnique 1", () => {
  var evaluated = sumOfUnique([1, 1, 1, 1, 1])
  expect(evaluated).toEqual(0)
})

test("sumOfUnique 2", () => {
  var evaluated = sumOfUnique([1, 2, 3, 4, 5])
  expect(evaluated).toEqual(15)
})

test("averagePay 0", () => {
  var evaluated = averagePay([4000, 3000, 1000, 2000])
  expect(evaluated).toEqual(2500.0)
})

test("averagePay 1", () => {
  var evaluated = averagePay([1000, 2000, 3000])
  expect(evaluated).toEqual(2000.0)
})

test("averagePay 2", () => {
  var evaluated = averagePay([6000, 5000, 4000, 3000, 2000, 1000])
  expect(evaluated).toEqual(3500.0)
})

test("averagePay 3", () => {
  var evaluated = averagePay([8000, 9000, 2000, 3000, 6000, 1000])
  expect(evaluated).toEqual(4750.0) // 410000
})

test("averagePay 4", () => {
  var evaluated = averagePay([25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000])
  expect(evaluated).toEqual(41700.0) // 410000
})

test("revereString 0", () => {
  var evaluated = reverseString(["h", "e", "l", "l", "o"])
  expect(evaluated).toEqual(["o", "l", "l", "e", "h"])
})

test("intersectionOfArrays 0", () => {
  var evaluated = intersectionOfArrays([1, 2, 2, 1], [2, 2])
  expect(evaluated).toEqual([2])
})

test("intersectionOfArrays 1", () => {
  var evaluated = intersectionOfArrays([9, 4, 9, 8, 4], [9, 4, 5])
  expect(evaluated).toEqual([9, 4])
})

test("missingNums 0", () => {
  var evaluated = missingNums([4, 3, 2, 7, 8, 2, 3, 1])
  expect(evaluated).toEqual([5, 6])
})

test("missingNums 1", () => {
  var evaluated = missingNums([1, 1])
  expect(evaluated).toEqual([2])
})

test("palindromeNumber 0", () => {
  var evaluated = palindromeNumber(123)
  expect(evaluated).toEqual(false)
})

test("palindromeNumber 1", () => {
  var evaluated = palindromeNumber(121)
  expect(evaluated).toEqual(true)
})

test("removeVal 0", () => {
  var evaluated = removeVal([0, 1, 2, 2, 3, 0, 4, 2], 2)
  expect(evaluated).toEqual(5)
})

test("removeVal 1", () => {
  var evaluated = removeVal([3, 2, 2, 3], 3)
  expect(evaluated).toEqual(2)
})

test("arrayStringsAreEqual 0", () => {
  var evaluated = arrayStringsAreEqual(["ab", "c"], ["a", "bc"])
  expect(evaluated).toEqual(true)
})

test("arrayStringsAreEqual 1", () => {
  var evaluated = arrayStringsAreEqual(["ab", "c"], ["a", "cb"])
  expect(evaluated).toEqual(false)
})

test("arrayStringsAreEqual 1", () => {
  var evaluated = arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])
  expect(evaluated).toEqual(true)
})

test("arrayStringsAreEqual 1", () => {
  var evaluated = arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])
  expect(evaluated).toEqual(true)
})

test("consistentStrings 0", () => {
  var evaluated = consistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])
  expect(evaluated).toEqual(2)
})

test("consistentStrings 1", () => {
  var evaluated = consistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
  expect(evaluated).toEqual(7)
})

test("consistentStrings 2", () => {
  var evaluated = consistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])
  expect(evaluated).toEqual(4)
})

test("runningSums 1", () => {
  var evaluated = runningSums([3, 1, 2, 10, 1])
  expect(evaluated).toEqual([3, 4, 6, 16, 17])
})

test("runningSums 2", () => {
  var evaluated = runningSums([1, 2, 3, 4])
  expect(evaluated).toEqual([1, 3, 6, 10])
})

test("defangingIP 0", () => {
  var evaluated = defangIP("1.1.1.1")
  expect(evaluated).toEqual("1[.]1[.]1[.]1")
})

test("defangingIP 0", () => {
  var evaluated = defangIP("255.100.50.0")
  expect(evaluated).toEqual("255[.]100[.]50[.]0")
})

test("maxWealth 0", () => {
  var evaluated = maxWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
  expect(evaluated).toEqual(6)
})

test("maxWealth 1", () => {
  var evaluated = maxWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
  expect(evaluated).toEqual(10)
})

test("jewelsAndStones 0", () => {
  var evaluated = jewelsAndStones("aA", "aAAbbbb")
  expect(evaluated).toEqual(3)
})

test("jewelsAndStones 1", () => {
  var evaluated = jewelsAndStones("z", "ZZ")
  expect(evaluated).toEqual(0)
})

test("alternateBits 0", () => {
  var evaluated = alternateBits(5)
  expect(evaluated).toEqual(true)
})

test("alternateBits 1", () => {
  var evaluated = alternateBits(7)
  expect(evaluated).toEqual(false)
})

test("alternateBits 2", () => {
  var evaluated = alternateBits(11)
  expect(evaluated).toEqual(false)
})
