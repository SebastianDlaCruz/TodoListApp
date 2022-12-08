import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserRegister from '../model/UserRegister.model';
import { registerUserWithEmail } from '../../../firebase/providers';
const UseStateRegister = () => {

    const [user, setUser] = useState(new UserRegister('', '', ''));
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({

            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleRegisterUser = (event) => {
        event.preventDefault();

        if (user.password === user.confirmPassword) setValidation(true);
    }



    const getAuth = async () => {
        const res = await registerUserWithEmail(user);
        if (res) {

            navigate('/login');
        }
    }

    useEffect(() => {

        if (validation) {
            getAuth();
        }

    }, [validation]);


    return {
        handleRegisterUser,
        handleChange,
        validation,
    };
}

export default UseStateRegister;
