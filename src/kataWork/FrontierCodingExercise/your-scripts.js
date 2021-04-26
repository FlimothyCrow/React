let problem5 = function () {
  // problem 5 module

  const button = document.getElementById("translate-number")
  button.addEventListener("click", (event) => {
    let int = document.getElementById("number-input").value
    console.log(intToRoman(int), int)
    document.getElementById("p6-text-container").innerHTML = intToRoman(int)
  })
}
problem5()

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
    console.log(document.querySelector("#p3-button"))
    document.getElementById("p3-button").innerHTML = "clicked!"
    document.querySelector("#p3-button").style.color = "black"
  })
}
problem3()

// function submitName(event) {
//   event.preventDefault()
//   hideAllValidationMessages()
//   let firstName = document.getElementById("firstName").value
//   let lastName = document.getElementById("lastName").value
//   fetch("/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       action: "step_one",
//       first_name: firstName,
//       last_name: lastName,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status === "error") {
//         displayError(data.errors)
//       } else {
//         document.getElementById("step_two").removeAttribute("hidden")
//         document.getElementById("step_one").setAttribute("hidden", true)
//       }
//     })
// }
