import { useState, useEffect } from 'react';
import { HeaderEl } from './HeaderEl';
import { HeaderTitle } from './HeaderTitle';
import { HeaderContainer } from './HeaderContainer';
import { HeaderWrapper } from './HeaderWrapper';
import { ModeSwitcher } from './ModeSwitcher';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

export const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderTitle>Where in the world?</HeaderTitle>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
                        Light Theme
                    </ModeSwitcher>
                </HeaderWrapper>
            </HeaderContainer>
        </HeaderEl>
    );
};
