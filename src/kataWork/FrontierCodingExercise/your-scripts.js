let problem6 = function () {
  // problem 5 module

  const button = document.getElementById("translate-number")
  button.addEventListener("click", (event) => {
    let int = document.getElementById("number-input").value
    console.log(intToRoman(int), int)
    document.getElementById("p6-text-container").innerHTML = intToRoman(int)
  })
}
problem6()

let problem2 = function () {
  // problem 2 module
  let isDropdownShowing = false
  const button = document.getElementById("p2-button")
  button.addEventListener("click", (event) => {
    document.getElementById("p2-nav").className = isDropdownShowing ? "" : "open"
    isDropdownShowing = !isDropdownShowing
  })
}
problem2()

function intToRoman(int) {
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

let problem3 = function () {
  // problem 3 module
  const button = document.getElementById("p3-button")
  button.addEventListener("click", (event) => {
    let button = document.getElementById("p3-button")
    button.innerHTML = "clicked!"
    button.style.color = "black"
  })
}
problem3()

let problem5 = function () {
  // problem 5 module
  fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => response.json())
    .then((json) => {
      let catRow = `<tr><th></th><th></th></tr>`
      json.forEach((catFactObject) => {
        catRow += `<tr>
              <td>${catFactObject.text} </td>
          </tr>`
      })

      document.getElementById("cat-fact-container").innerHTML = catRow
    })
}
problem5()
