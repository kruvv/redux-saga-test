import {
  takeEvery, // Срабатывает каждый раз
  put,
  call,
  fork,
  all,
} from "@redux-saga/core/effects";
import {
  GET_POPULAR_NEWS,
  GET_LATEST_NEWS,
  SET_POPULAR_NEWS_ERROR,
  SET_LATEST_NEWS_ERROR,
} from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
  } catch {
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: "I falldown in handleLatestNews!!!",
    });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: "I falldown in handlePopularNews!!!",
    });
  }
}

export function* watchPopularSaga() {
  // Слежение за экшенами, которые срабатывают в приложении.
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestSaga() {
  // Слежение за экшенами, которые срабатывают в приложении.
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield all([fork(watchLatestSaga), fork(watchPopularSaga)]);
}
