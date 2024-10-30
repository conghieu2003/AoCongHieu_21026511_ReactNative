// store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos', //Tên slice
  initialState: {
    list: [], // Trạng thái ban đầu chứa một mảng rỗng `list` để lưu trữ các todo.
  },
  reducers: {
    // Hàm reducer `addTodo` để thêm một todo mới vào danh sách.
    addTodo: (state, action) => {
      // Thêm một đối tượng todo mới với ID duy nhất (dùng `Date.now()`), nội dung từ `action.payload`, và trạng thái `completed` là false.
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
    },
    // Hàm reducer `toggleTodo` để thay đổi trạng thái hoàn thành của một todo.
    toggleTodo: (state, action) => {
      // Tìm todo có ID bằng `action.payload`.
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        
        todo.completed = !todo.completed;
      }
    },
    // Hàm reducer `removeTodo` để xóa một todo khỏi danh sách.
    removeTodo: (state, action) => {
      // Lọc các todo và giữ lại những todo có ID khác với `action.payload`.
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    setTodos: (state, action) => {
      // Gán `action.payload` (là một mảng todo) vào `state.list`.
      state.list = action.payload;
    },
  },
});
// Xuất các action để có thể dùng chúng trong component và saga.
export const { addTodo, toggleTodo, removeTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
