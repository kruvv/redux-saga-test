import {
  take,
  takeEvery, // Срабатывает каждый раз
  takeLatest, // Срабатывает в конце и выдает всю серию действий на элементе (в данном слуючае нажатие на кнопку счетчика)
  takeLeading,
  select,
} from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS } from "../constants";
import { getLatestNews } from "../../api";

const delay = (time) =>
  new Promise((res, rej) => {
    setTimeout(res, time * 1000);
  });

export function* workerSaga() {
  // Описываем работу бизнес логики и любые асинхронные действия.
  // const count = yield select(({ counter }) => counter.count);
  // yield delay(2);
  // console.log("request 1");
  // console.log(`request ${count}`);
  const data = yield getLatestNews();
  console.log(data);
}

export function* watchClickSaga() {
  // Слежение за акшенами, которые срабатывают в приложении.
  yield takeEvery(GET_LATEST_NEWS, workerSaga);

  // yield takeEvery(INCREASE_COUNT, workerSaga);
  // yield takeLatest(INCREASE_COUNT, workerSaga);
  // yield takeLeading(INCREASE_COUNT, workerSaga);

  // yield take(DECREASE_COUNT);
  // console.log("request 2");

  // yield;
}

export default function* rootSaga() {
  yield watchClickSaga();
}
