import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExapleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

export function* watchFetchexampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}