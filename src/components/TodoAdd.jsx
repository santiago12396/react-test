import { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length === 0) return;
    onNewTodo({
        id: new Date().getTime() * 3,
        description: inputValue.trim(),
        done: false
    });
    setInputValue('');
  }

  return (
    <form className="form-todo">
        <input 
            type="text" 
            placeholder="Tarea por hacer..."
            value={ inputValue }
            onChange={ onInputChange }
        />
        <button type="button" className="btn btn-success" onClick={ onSubmit }>Agregar</button>
    </form>
  )
}

