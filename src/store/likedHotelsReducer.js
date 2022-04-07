const defaultState = {
  hotels: [],
}

const ADD_HOTEL = "ADD_HOTEL"
const REMOVE_HOTEL = "REMOVE_HOTEL"

export const LikedHotels = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HOTEL:
      return {...state, hotels: [...state.hotels, action.payload]}
    case REMOVE_HOTEL:
      return {...state, hotels: [state.hotels.filter(hotel => hotel.hotelId !== action.payload)]}
    default:
      return state
  }
}

export const likeHotelAction = (payload) => ({type: ADD_HOTEL, payload})
export const removeHotelAction = (payload) => ({type: REMOVE_HOTEL, payload})