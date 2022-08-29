import { useReducer } from 'react';
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


export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = todo => {
    console.log('todo:', todo)
  }

  return (
    <>
      <div className="container wrap-todo">
        <div className="todo">
            <h1>TODO (10), <span className="pending">Pendiente (2)</span></h1>
            <hr />
            <TodoList todos={ todos } />
        </div>
        <div className="wrap-form">
            <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  )
}
