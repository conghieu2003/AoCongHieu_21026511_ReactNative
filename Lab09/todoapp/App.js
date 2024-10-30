import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ToDoApp from './toDoApp';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
};

export default App;