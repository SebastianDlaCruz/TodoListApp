import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LabelContainer from '../../components/LabelContainer';
import { SectionRegisterStyle } from './style-components';
import { FormContainerStyle } from '../../styled-components';
import { SubmitStyle } from '../../styled-components';
import { UserContext } from '../../context';
import { useTheme } from 'styled-components';
const Register = () => {

    const theme = useTheme();


    return (
        <SectionRegisterStyle
            theme={theme.backgroundBody}
        >

            <header>
                <h2>Registrarte En Todo App</h2>
                <Link to={'/login'}>Volver Al Login</Link>
            </header>

            <FormContainerStyle>

                <LabelContainer
                    htmlFor='email'
                    type='email'
                    textLabel='Email'
                />

                <LabelContainer
                    htmlFor='password'
                    type='password'
                    textLabel='Password'

                />

                <LabelContainer
                    htmlFor='confirm_password'
                    type='password'
                    textLabel='Confirmar Password'
                />

                <SubmitStyle type='submit' value='Registrarse'
                    borderStyle={theme.colorTextItem}
                />


            </FormContainerStyle>

        </SectionRegisterStyle>
    );
}

export default Register;
