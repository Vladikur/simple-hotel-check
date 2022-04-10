
export function countHotelsString(countHotels) {
  if(countHotels === 0 || countHotels > 4) {
    return `отелей`
  }
  if(countHotels === 1) {
    return `отель`
  }
  if(countHotels > 1 && countHotels < 5) {
    return `отеля`
  }
}

export function countDaysString(days) {
  if(days === 0 || days > 4) {
    return `${days} дней`
  }
  if(days === 1) {
    return `${days} день`
  }
  if(days > 1 && days < 5) {
    return `${days} дня`
  }
}