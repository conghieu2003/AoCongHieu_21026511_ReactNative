import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch({ type: 'todos/FETCH_TODOS' }); // Lấy todos từ API khi component được mount
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    if (newTodo.trim()) {
      dispatch({ type: 'todos/ADD_TODO', payload: newTodo }); // Dispatch action để thêm todo mới vào API
      setNewTodo(''); // Đặt lại giá trị input
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} // Cập nhật trạng thái input
          placeholder="Nhập todo mới"
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li> // Hiển thị todos
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
