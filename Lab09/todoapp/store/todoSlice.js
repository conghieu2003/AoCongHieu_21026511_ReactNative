// store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now().toString(), // Tạo ID duy nhất cho todo
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    setTodos: (state, action) => {
      state.list = action.payload.map((item) => ({
        id: item.id,
        text: item.name,
        completed: false,
      }));
    },
  },
});

// Xuất các action
export const { addTodo, toggleTodo, removeTodo, setTodos } = todoSlice.actions;

// Xuất reducer
export default todoSlice.reducer;
