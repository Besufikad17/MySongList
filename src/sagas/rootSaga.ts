import { all, fork } from "redux-saga/effects";
import { watchSongAdded, watchSongFetched, watchSongUpdated, watchSongDeleted} from "./songSaga";

export function* rootSaga(){
    yield all([fork(watchSongAdded), fork(watchSongFetched), fork(watchSongUpdated), fork(watchSongDeleted)]);
}