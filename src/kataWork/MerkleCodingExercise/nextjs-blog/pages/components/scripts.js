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
  let objOfDirections = { n: "^", e: ">", s: "v", w: "<" }
  let field = Array(5)
    .fill("0")
    .map((x) => Array(5).fill("0"))
  field[currentPosition.x][currentPosition.y] = objOfDirections[currentPosition.facing]
  // { x: 2, y: 2, facing: "e" }
  return field
}

// cow graphic...?
// maybe a field graphic?
// button for "EAT GRASS"
// instructions shape like ['f', 'l', 'f', 'r', 'b', 'f', 'f'];

// cow can start in the center facing north

// react fragment
// map lives in state data
// controller maps through [instructions]
// for each instruction, if direction > movementParse
// else if rotation > rotationParse
// mP || rP > drawField(coords) > this.setState.field
