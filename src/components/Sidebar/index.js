import React from 'react';
import { 
    CloseIcon, 
    Icon, 
    SideBarContainer, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './sideBarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="social" onClick={toggle}>Redes</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projetos</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/download">Download - cv</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
