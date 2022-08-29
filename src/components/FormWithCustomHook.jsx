import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

 const { form, onInputChange } = useForm({
    username: 'santiago12396',
    email: 'lorduysantiago@gmail.com',
    password: '0000'
 })

  return (
    <>
        <h1>Formulario</h1>
        <hr />
        <input type="text"
               name="username"
               placeholder="Usuario"
               onChange={ onInputChange }
               value={ form.username }
        />
        <br />
        <input type="email"
               name="email"
               placeholder="Correo electrónico"
               onChange={ onInputChange }
               value={ form.email }
        />
        
        <br />
        <input type="password"
               name="password"
               placeholder="Contraseña"
               onChange={ onInputChange }
               value={ form.password }
        />
    </>
  )
}
