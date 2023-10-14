import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExapleTasks";
import { saveTasksToLocalStorage } from "./tasksLocaleStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksToLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksToLocalStorageHandler);
}