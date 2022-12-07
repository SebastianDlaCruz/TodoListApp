import React from 'react';


const Login = () => {

    return (
        <div>

            <form>
                <label htmlFor='Email'>Ingrese el Email</label>
                <input type='text' placeholder='Ejemplo:ejemplo@gmail.com' name='Email' />
                <label htmlFor='Password'>Ingrese la Contraseña</label>
                <input type='password' placeholder='*********' name='Password' />
            </form>
        </div>
    );
}

export default Login;
