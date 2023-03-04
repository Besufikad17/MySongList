import { put, takeEvery, all, fork, call, SagaReturnType } from 'redux-saga/effects';
import api from '../apis/index';
import { SongAction, set_songs, add_song, update_song, delete_song } from '../slices/songSlice';

function* add_song_worker(action: SongAction) {
  try {
    const data: SagaReturnType<typeof api.add_song> = yield call(api.add_song, action.payload)
    yield put(add_song(data))
  } catch (error) {
    console.log(error);
  }
}

function* get_song_worker(){
  try {
    const data: SagaReturnType<typeof api.get_songs> = yield call(api.get_songs)
    yield put(set_songs(data))
  } catch (error) {
    console.log(error);
  }
}

function* update_song_worker(action: SongAction){
  try {
    const data: SagaReturnType<typeof api.update_song> = yield call(api.update_song, action.payload)
    yield put(update_song(data))
  } catch (error) {
    console.log(error);
  }
}

function* delete_song_worker(action: SongAction){
  try {
    const data: SagaReturnType<typeof api.delete_song> = yield call(api.delete_song, action.payload)
    yield put(delete_song(data))
  } catch (error) {
    console.log(error);
  }
}

export function* watchSongAdded() {
  yield takeEvery('songs/add_song_requested', add_song_worker)
}

export function* watchSongFetched() {
  yield takeEvery('songs/get_songs', get_song_worker)
}

export function* watchSongUpdated() {
  yield takeEvery('songs/update_song_requested', update_song_worker)
}

export function* watchSongDeleted() {
  yield takeEvery('songs/delete_song_requested', delete_song_worker)
}

 