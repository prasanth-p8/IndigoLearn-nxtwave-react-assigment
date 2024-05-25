import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

export const Link = styled(HashLink)`
color:#ffffff;
opacity:.6;

&.selected {
    font-weight: bold;
    color: blue;
  }
  
  &:hover {
    opacity:1;
  }
  
`

export const LogoLink = styled(HashLink)`
color:#ffffff;
`

export const HeaderMainContainer = styled.div`
background-color: #2b0173;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
max-height:50px;
padding-left:30px;
padding-right:30px;
position:fixed;
right:0;
left:0;
`
export const LogoContainer = styled.div`
display:flex;
align-items:center;
max-width:200px;
padding:10px;
cursor:pointer;
outline:none;
`
export const  LogoTitle = styled.h2`
margin-left:10px;
`
export const CenterHeadingContainer = styled.ul`
list-style-type:none;
font-family:Serif;
font-weight:600;
left-margin:0;
display:flex;
align-items:center;
min-width:35vw;
`
export const  CenterHeading = styled.li`
margin-right:20px;
cursor:pointer;
outline:none;
`
export const UserLogContainer = styled.div`
background-color:white;
padding:5px 10px 5px 10px;
display:flex;
justify-content:space-between;
min-width:110px;
margin-right:15px;
border-radius:7px;
cursor:pointer;
outline:none;
`
export const UserLogButton = styled.button`
border:none;
background-color:transparent;
font-family:roboto;
color:#2b0173;
font-weight:700;
font-size:14px;
cursor:pointer;
outline:none;
`