import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_HOTELS, newFoundHotelsAction } from "../store/foundHotelsReducer";

const fetchHotelsFromApi = (params) => fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${params.location}&currency=rub&checkIn=${params.checkIn}&checkOut=${params.checkOut}&limit=30`)

function* fetchHotelsWorker(searchParams) {
  const params = searchParams.payload
  const data = yield call(() => fetchHotelsFromApi(params))
  const json = yield call(() => new Promise(res  => res(data.json())))
  yield put(newFoundHotelsAction(json))
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}