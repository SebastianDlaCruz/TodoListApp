import { FormContainerStyle } from "../../styled-components";
import { SubmitStyle } from "../../styled-components";
import { useTheme } from 'styled-components';
import { Link } from "react-router-dom";
import HeaderAuth from "../../components/HeaderAuth";
import SectionAuth from "../../components/SectionAuth";
import LabelContainer from "../../components/LabelContainer";
const Login = () => {

    const theme = useTheme();
    return (

        <SectionAuth>

            <HeaderAuth title={'Login Todo App'} />

            <FormContainerStyle>
                <LabelContainer htmlFor='email' type='text' textLabel='Ingrese el Email' />
                <LabelContainer htmlFor='password' type='Password' textLabel='Ingrese la Contraseña' />
                <SubmitStyle type='submit' value="Ingresar" borderStyle={theme.colorTextItem} />
                <Link to="/register">Registrar Cuenta</Link>
            </FormContainerStyle>
        </SectionAuth>
    );
}

export default Login;
