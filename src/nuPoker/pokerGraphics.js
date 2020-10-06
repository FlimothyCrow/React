export function cardToFileName(cardObject){
    let face = cardObject.face.toString()
    if (face === "13"){
        face = "K"
    }
    else if (face === "1"){
        face = "A"
    }
    else if (face === "12"){
        face = "Q"
    }
    else if (face === "11"){
        face = "J"
    }
    return face + cardObject.suit.toUpperCase() + ".jpg"
}