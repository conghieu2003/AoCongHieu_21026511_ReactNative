// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './todoSlice';
import rootSaga from '../sagas';

// Tạo một instance của `sagaMiddleware` bằng cách gọi `createSagaMiddleware()`.
// Middleware giúp xử lý các hiệu ứng bất đồng bộ trong ứng dụng bằng Redux Saga.
const sagaMiddleware = createSagaMiddleware();
// Sử dụng `configureStore` để tạo store Redux các cấu hình.
const store = configureStore({
   // `reducer` là nơi cấu hình các reducer cho store. 
  reducer: {
    // Gán `todoReducer` cho key `todos`, nghĩa là mọi state của `todos` sẽ được quản lý bởi `todoReducer`.
    todos: todoReducer,
  },
  // Cấu hình `middleware` để sử dụng `sagaMiddleware` và bỏ qua `thunk` middleware mặc định của Redux Toolkit.
  // Sau đó, `concat(sagaMiddleware)` thêm `sagaMiddleware` vào chuỗi các middleware của Redux.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
// Sau khi store đã được cấu hình và `sagaMiddleware` đã được thêm vào, `sagaMiddleware.run(rootSaga)` sẽ khởi động `rootSaga`.
sagaMiddleware.run(rootSaga);

export default store;
