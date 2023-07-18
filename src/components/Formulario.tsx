import { useForm } from '../hooks/useForm';


export const Formulario = () => {

    const {formulario , email , password, onChange} = useForm({
        email : "test@test.com",
        password : "1234",
    });


  return (
    <>
    <h2>Formulario</h2>
    <input 
    type="text"
    className="form-control" 
    value={formulario.email}
    placeholder="email"
    onChange={ ({target})=>onChange( target.value , 'email')}
    />
    
    <input 
    type="text"
    className="form-control mt-2 mb-2" 
    value={formulario.password}
    placeholder="password"
    onChange={ ({target})=>onChange( target.value , 'password')}
    />

    <code>
        <pre>
            {JSON.stringify(formulario, null, 2)}
        </pre>
    </code>
    </>
  )
}
