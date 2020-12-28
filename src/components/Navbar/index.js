import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './navBarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">gfilenga</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="social">Redes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projetos</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink onClick={() => window.open("https://drive.google.com/file/d/1JNu2jJvP6zQ6NfpxsH0ju0bEo3E95KU_/view?usp=sharing")}>Download - cv</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
