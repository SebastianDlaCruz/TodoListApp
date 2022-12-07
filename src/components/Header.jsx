import { useState, useContext } from 'react';
import Picture from './Picture';
import { HeaderStyle } from '../styled-components';
import { ButtonChangeTheme } from '../styled-components';
import { UserContext } from '../context';

const Header = () => {

    const { themeGeneral, handleTheme } = useContext(UserContext);

    return (

        <HeaderStyle>

            <Picture
                src={"/images/bg-mobile-dark.jpg"}
                srcSet={"/images/bg-desktop-dark.jpg"}
                alt="dark"
                media='(min-width: 950px)'
                opacity={!themeGeneral ? '1' : '0'}

            />

            <Picture
                src={"/images/bg-mobile-light.jpg"}
                srcSet={"/images/bg-desktop-light.jpg"}
                alt="light"
                media='(min-width: 950px)'
                opacity={themeGeneral ? '1' : '0'}

            />

            <div>
                <h1>TODO</h1>
                <ButtonChangeTheme
                    onClick={handleTheme}
                    check={themeGeneral ? true : false}
                />

            </div>


        </HeaderStyle>
    );
}

export default Header;
