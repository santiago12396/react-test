export const TodoItem = ({todo}) => {
  return (
    <li className="data">
        <p>{todo.description}</p>
        <div className="wrap-btn">
            <button className="btn btn-danger">Eliminar</button>
        </div>
    </li>   
  )
}
