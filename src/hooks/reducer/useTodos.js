import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = initialState => {
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const useTodos = ({ initialState }) => {

 const [todos, dispatch] = useReducer(todoReducer, initialState, init);

 const todosCount = () => {
  return todos.length;
 }

 const pendingTodosCount = () => {
  return todos.filter(todo => !todo.done).length;
 }

 useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  const handleNewTodo = todo => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    });
  }

  const handleDeleteTodo = id => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id
    });
  }

  const handleToggleTodo = id => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  return (
    {
      todos,
      handleNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
      todosCount,
      pendingTodosCount
    }
  )
}
