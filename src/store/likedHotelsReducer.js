const defaultState = {
  hotels: [],
}

const ADD_HOTEL = "ADD_HOTEL"
const REMOVE_HOTEL = "REMOVE_HOTEL"
const SORT_HOTELS = "SORT_HOTELS"

export const LikedHotels = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HOTEL:
      return {...state, hotels: [action.payload, ...state.hotels]}
    case REMOVE_HOTEL:
      return {...state, hotels: state.hotels.filter(hotel => hotel.hotelId !== action.payload)}
    case SORT_HOTELS:
      return {...state, hotels: action.payload}
    default:
      return state
  }
}

export const likeHotelAction = (payload) => ({type: ADD_HOTEL, payload})
export const removeHotelAction = (payload) => ({type: REMOVE_HOTEL, payload})
export const sortHotelAction = (payload) => ({type: SORT_HOTELS, payload})