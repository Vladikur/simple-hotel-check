const defaultState = {
  hotels: [],
}

const NEW_HOTELS = "NEW_HOTELS"

export const foundHotels = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_HOTELS:
      return {...state, hotels: action.payload}
    default:
      return state
  }
}

export const newFoundHotelsAction = (payload) => ({type: NEW_HOTELS, payload})