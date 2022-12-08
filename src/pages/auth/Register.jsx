import LabelContainer from '../../components/LabelContainer';
import SectionAuth from '../../components/SectionAuth';
import HeaderAuth from '../../components/HeaderAuth';
import { FormContainerStyle, SubmitStyle } from '../../styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import SuccessMessage from './components/SuccessMessage';
import UseStateRegister from './hook/useStateRegister';

const Register = () => {

    const theme = useTheme();

    const { handleRegisterUser,
        handleChange, validation } = UseStateRegister();

    return (

        <SectionAuth>

            <HeaderAuth title={'Registrarte En Todo App'} />

            <SuccessMessage valid={validation} />


            <FormContainerStyle onSubmit={handleRegisterUser}>

                <LabelContainer
                    htmlFor='email'
                    type='email'
                    textLabel='Email'
                    handleEvent={handleChange}
                />

                <LabelContainer
                    htmlFor='password'
                    type='password'
                    textLabel='Password'
                    handleEvent={handleChange}
                />

                <LabelContainer
                    htmlFor='confirmPassword'
                    type='password'
                    textLabel='Confirmar Password'
                    handleEvent={handleChange}
                />

                <SubmitStyle type='submit' value='Registrarse'
                    borderStyle={theme.colorTextItem}
                />


            </FormContainerStyle>


            <Link to="/login">Login</Link>

        </SectionAuth>
    );
}

export default Register;
