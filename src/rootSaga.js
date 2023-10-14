import {all} from "redux-saga/effects";
import { watchFetchexampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchexampleTasks(),
    ]);
}