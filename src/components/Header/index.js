import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import {HeaderMainContainer,LogoContainer,LogoTitle,
    CenterHeadingContainer, CenterHeading,UserLogContainer,UserLogButton, Link,LogoLink
  } from './styledComponents'

function Header() {
  return (
    <HeaderMainContainer>
        <LogoLink  smooth to="#become-acca" >
        <LogoContainer>
        <GiHamburgerMenu size='25'/>
            <LogoTitle>IndigoLearn</LogoTitle>
        </LogoContainer>
        </LogoLink>
        <CenterHeadingContainer>
        <CenterHeading>
                <Link smooth to="#become-acca" activeClassName="selected">Become ACCA</Link>
        </CenterHeading>
        <CenterHeading>
                <Link smooth to="#why-choose-us" activeClassName="selected">Why Choose Us</Link>                
        </CenterHeading>
        <CenterHeading>
                <Link smooth to="#learning-acca" activeClassName="selected">Learning in ACCA</Link>              
        </CenterHeading>
        <CenterHeading>
                <Link smooth to="#placements" activeClassName="selected">Placement Assistance</Link>
        </CenterHeading>
        </CenterHeadingContainer>
        <UserLogContainer>
        <FaUserCircle color='#2b0173' size='20' />
                <UserLogButton>Log In/Sign Up</UserLogButton>
        </UserLogContainer>
    </HeaderMainContainer>
  )
}

export default Header