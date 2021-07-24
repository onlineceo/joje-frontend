import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home'>
                        صفحه اصلی                   
                    </SidebarLink>
                    <SidebarLink to='product'>
                        محصولات
                    </SidebarLink>
                    <SidebarLink to='service'>
                        خدمات
                    </SidebarLink>
                    <SidebarLink to='about'>
                        درباره ما
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>ثبت نام / ورود</SidebarRoute>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>    
    );
};

export default Sidebar;