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
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="social" onClick={toggle}>Social</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
