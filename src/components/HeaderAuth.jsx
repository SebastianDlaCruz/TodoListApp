import React from 'react';
import { HeaderAuthorStyle } from '../styled-components';
const HeaderAuth = ({ title }) => {
    return (
        <HeaderAuthorStyle>
            <h2>{title}</h2>
        </HeaderAuthorStyle>
    );
}

export default HeaderAuth;
