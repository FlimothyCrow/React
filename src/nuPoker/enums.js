export const PAIR = "pair"
export const TWO_PAIR = "two pair"
export const THREE = "three"
export const HIGH_CARD = "high card"
export const FOUR = "four"
export const STRAIGHT = "straight"
export const FLUSH = "flush"
export const FULL_HOUSE = "full house"
export const STRAIGHT_FLUSH = "straight flush"

export function getHandRank(handType) {
  let rankedHands = {
    [HIGH_CARD]: 0,
    [PAIR]: 1,
    [TWO_PAIR]: 2,
    [THREE]: 3,
    [STRAIGHT]: 4,
    [FLUSH]: 5,
    [FULL_HOUSE]: 6,
    [FOUR]: 7,
    [STRAIGHT_FLUSH]: 8,
  }
  return rankedHands[handType]
}
