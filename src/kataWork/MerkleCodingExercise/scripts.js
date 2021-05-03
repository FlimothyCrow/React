export function rotationParse(position, movement) {
  let positionToReturn = position
  let compassArray = ["n", "e", "s", "w"]
  if (movement === "r") {
    if (!compassArray[compassArray.indexOf(position.facing) + 1]) {
      positionToReturn.facing = "n"
    } else {
      positionToReturn.facing = compassArray[compassArray.indexOf(position.facing) + 1]
    }
  } else {
    if (movement === "l") {
      if (!compassArray[compassArray.indexOf(position.facing) - 1]) {
        positionToReturn.facing = "w"
      } else {
        positionToReturn.facing = compassArray[compassArray.indexOf(position.facing) - 1]
      }
    }
  }
  return positionToReturn
}

export function movementParse(currentPosition, movement) {
  let positionToReturn = currentPosition
  let current = { x: currentPosition.x, y: currentPosition.y, facing: currentPosition.facing }
  if (movement === "f") {
    if (currentPosition.facing === "n") {
      positionToReturn.x -= 1
    } else if (currentPosition.facing === "e") {
      positionToReturn.y += 1
    } else if (currentPosition.facing === "s") {
      positionToReturn.x += 1
    } else if (currentPosition.facing === "w") {
      positionToReturn.y -= 1
    }
  } else if (movement === "b") {
    if (currentPosition.facing === "n") {
      positionToReturn.x += 1
    } else if (currentPosition.facing === "e") {
      positionToReturn.y -= 1
    } else if (currentPosition.facing === "s") {
      positionToReturn.x -= 1
    } else if (currentPosition.facing === "w") {
      positionToReturn.y += 1
    }
  }

  if (positionToReturn.y < 0 || positionToReturn.x < 0) {
    return current
  } else if (positionToReturn.y > 4 || positionToReturn.x > 4) {
    return current
  } else {
    return positionToReturn
  }
}

export function drawField(currentPosition) {
  let field = Array(5)
    .fill(0)
    .map((x) => Array(5).fill(0))
  field[currentPosition.x][currentPosition.y] = 1
  // { x: 2, y: 2, facing: "e" }
  return field
}

// grid n x n
// cow graphic...?
// maybe a field graphic?
// buttons to click for motion and rotation || arrow keys would be better
// button for "EAT GRASS"
// cowPosition is shaped {xCoords: n, yCoords: n, facing: n/s/e/w}
// instructions shape like ['f', 'l', 'f', 'r', 'b', 'f', 'f'];
//       l = -1 row
//       r = +1 row
//       f = -1 column
//       b = +1 column
// cow can start in the center facing north
// there needs to be logic to prevent cow from going out of the field
// how about an extra layer of "fence" and there's a warning when cow is near it?
// movementParse takes instructions array and returns newPosition object {x: y: facing:}
// drawField takes currentField and newPosition and redraws the field
// controller will map through the long instructions array
// then call movementParse() and drawfield() for each element
