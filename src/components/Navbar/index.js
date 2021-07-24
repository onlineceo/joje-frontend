import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn  } from './NavbarElements';



const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>    VetNow    </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/about'>درباره ما</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services'>خدمات</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/products'>محصولات</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/home'>صفحه اصلی</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='Login'> ثبت نام / ورود </NavBtnLink>  
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
