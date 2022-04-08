import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { hotelsWatcher } from '../saga/horelsSaga';
import { foundHotels } from './foundHotelsReducer';
import { LikedHotels } from './likedHotelsReducer';
import { formData } from './formDataReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  foundHotels,
  LikedHotels,
  formData
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelsWatcher)