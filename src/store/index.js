import { createStore, combineReducers } from 'redux';
import { foundHotels } from './foundHotelsReducer';
import { LikedHotels } from './likedHotelsReducer';
import { formData } from './formDataReducer'

const rootReducer = combineReducers({
  foundHotels, LikedHotels, formData
})

export const store = createStore(rootReducer)