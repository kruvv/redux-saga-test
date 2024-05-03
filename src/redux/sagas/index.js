import { take } from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

export function* workerSaga() {
  // Описываем работу бизнес логики и любые асинхронные действия.
  yield;
}

export function* watchClickSaga() {
  // Слежение за акшенами, которые срабатывают в приложении.

  yield take(INCREASE_COUNT);
  console.log("request 1");

  yield take(DECREASE_COUNT);
  console.log("request 2");

  // yield;
}

export default function* rootSaga() {
  yield watchClickSaga();
}
