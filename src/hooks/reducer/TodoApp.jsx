import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from '../../components/TodoList';
import { TodoAdd } from '../../components/TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Desc 1',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Desc 2',
        done: false
    }
]

const init = initialState => {
  return JSON.parse(localStorage.getItem('todos')) || initialState;
}


export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
      <div className="container wrap-todo">
        <div className="todo">
            <h1>TODO (10), <span className="pending">Pendiente (2)</span></h1>
            <hr />
            <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } />
        </div>
        <div className="wrap-form">
            <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  )
}
