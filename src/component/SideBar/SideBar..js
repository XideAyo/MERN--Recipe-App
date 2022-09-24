import React from 'react'
import { SideBarContainer, Icon, CloseIcon ,SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick= {toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu onClick= {toggle}>
                    <SideBarLink to='about' onClick= {toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About</SideBarLink>
                    <SideBarLink to='services' onClick= {toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</SideBarLink>
                    <SideBarLink to='contact' onClick= {toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Contact</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/search'>Get Started</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar