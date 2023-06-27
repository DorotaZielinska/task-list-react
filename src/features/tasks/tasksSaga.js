import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHnadler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const { tasks } = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}
export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHnadler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}