import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import {HeaderMainContainer,LogoContainer,LogoTitle,
    CenterHeadingContainer, CenterHeading,UserLogContainer,UserLogButton
  } from './styledComponents'

function Header() {
  return (
    <HeaderMainContainer>
        <LogoContainer>
        <GiHamburgerMenu size='20'/>
            <LogoTitle>IndigoLearn</LogoTitle>
        </LogoContainer>
        <CenterHeadingContainer>
        <CenterHeading>
                Become ACCA
        </CenterHeading>
        <CenterHeading>
                Why Choose Us
        </CenterHeading>
        <CenterHeading>
                Learning in ACCA
        </CenterHeading>
        <CenterHeading>
                Placement Assistance
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