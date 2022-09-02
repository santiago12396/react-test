export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="data">
        <p 
            className={ todo.done ? 'line-through': null }
            onClick={ () => onToggleTodo(todo.id) }>{todo.description}
        </p>
        <div className="wrap-btn">
            <button onClick={ () => onDeleteTodo(todo.id) } className="btn btn-danger">Eliminar</button>
        </div>
    </li>   
  )
}
