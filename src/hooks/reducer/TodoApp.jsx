import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import { useTodos } from './useTodos';

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos([]);

  return (
    <>
      <div className="container wrap-todo">
        <div className="todo">
            <h1>TODO ({todosCount()}), <span className="pending">Pendiente ({pendingTodosCount()})</span></h1>
            <hr />
            <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
        </div>
        <div className="wrap-form">
            <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  )
}
