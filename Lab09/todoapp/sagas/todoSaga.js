// sagas/todoSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setTodos } from '../store/todoSlice';

function fetchTodosFromAPI() {
  return axios.get('https://6458c8bc4eb3f674df7d3ce6.mockapi.io/ch/v1/category');
}

function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodosFromAPI);
    yield put(setTodos(response.data)); // response.data đã có dạng JSON đúng như bạn đưa ra
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

function* watchFetchTodos() {
  yield takeEvery('todos/FETCH_TODOS', fetchTodosSaga);
}

export default watchFetchTodos;
