export const TodoItem = ({todo, onDeleteTodo}) => {
  return (
    <li className="data">
        <p>{todo.description}</p>
        <div className="wrap-btn">
            <button onClick={ () => onDeleteTodo(todo.id) } className="btn btn-danger">Eliminar</button>
        </div>
    </li>   
  )
}
