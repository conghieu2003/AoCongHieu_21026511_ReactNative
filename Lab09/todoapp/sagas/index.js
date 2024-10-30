import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { setTodos, addTodo as addTodoAction } from '../store/todoSlice';

// API để thêm todo
const addTodoToAPI = (todo) => {
  return axios.post('https://6458c8bc4eb3f674df7d3ce6.mockapi.io/ch/v1/category', todo);
};

// API để lấy todos
const fetchTodosFromAPI = () => {
  return axios.get('https://6458c8bc4eb3f674df7d3ce6.mockapi.io/ch/v1/category');
};

// Saga để lấy todos
function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodosFromAPI);
    yield put(setTodos(response.data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Saga để thêm todo
function* addTodoSaga(action) {
  try {
    const newTodo = { name: action.payload }; // Chuyển đổi tên thành định dạng mà API yêu cầu
    const response = yield call(addTodoToAPI, newTodo);
    yield put(addTodoAction(response.data.name)); // Cập nhật Redux state
  } catch (error) {
    console.error('Error adding todo:', error);
  }
}

// Theo dõi các action
function* watchFetchTodos() {
  yield takeEvery('todos/FETCH_TODOS', fetchTodosSaga);
}

function* watchAddTodo() {
  yield takeEvery('todos/ADD_TODO', addTodoSaga);
}

// Kết hợp tất cả các saga
export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
  ]);
}
