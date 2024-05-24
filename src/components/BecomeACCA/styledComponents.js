import styled from "styled-components";

export const MainContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
`

export const ACCAMainContainer = styled.div`
max-width:740px;
max-height:500px;
padding:20px;
`

export const RequestCallBack = styled.div`
box-shadow:1px 2px 3px 4px #c7c9c8;
min-height:300px;
padding:20px;
border-radius:10px;
max-width:600px;
margin-top:60px;
border-top:3px solid #2b0173;
`

export const ACCAHeading = styled.h1``

export const ACCADescription = styled.p`
color:#474747;
font-weight:600;
`


export const ACCAFacilities = styled.ul`
    list-style-type: none; 
    padding-left:0;
display:flex;
flex-wrap:wrap;
`


export const FacilitiesList = styled.li`
min-width:140px;
box-shadow:1px 2px 3px 4px #c7c9c8;
border-radius:10px;
margin-right:40px;
margin-bottom:40px;
`


export const FacilityTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`


export const FacilitiesHeading = styled.p`
margin-left:10px;
font-size:13px;
font-weight:600;
`


export const FacilitiyCount = styled.p`
margin-top:0;
text-align:center;
font-size:13px;
font-weight:600;
`

export const ACCAButtonContainer = styled.div`

`
export const ACCAButton = styled.button`
    color:#ffffff;
    background-color:${props => props.toknowmore? "#f21111" : "#2b0173"};
    border:none;
    border-radius:4px;
    padding:10px 15px 10px 15px;
    font-weight:600;
    margin-right:10px;
    cursor:pointer;
    outline:none;
`

export const MainForm = styled.form`
display:flex;
flex-direction:column;
justify-content:space-between;
min-height:250px;
`

export const FormHeading = styled.h1`
font-size:18px;
text-align:center;
font-family:sans;
`

export const UserInput = styled.input`
min-width:500px;
padding:10px;
`

export const SubmitButton = styled.button`
padding:10px;
color:#ffffff;
cursor:pointer;
    outline:none;
    background-color:#2b0173;
    border:3px;
    border:none;
`

export const PopupMainContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`

export const PopContainer = styled.div`
border-top:2px solid #2b0173;
box-shadow:1px 2px 3px 4px #c7c9c8;
background:#4ebdfc;
min-width:500px;
text-align:center;
min-height:200px;
padding:20px;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
export const CallBackSuccessText = styled.p`
max-width:460px;
color:#153345;
font-weight:600;
font-size:20px;
`
export const OkayButton = styled.button`
        color:#000000;
    background-color: #36de33;
    align-self:center;
    border:none;
    border-radius:4px;
    padding:10px 15px 10px 15px;
    font-weight:600;
    cursor:pointer;
    min-width:100px;
    outline:none;
`
export const SuccessImage = styled.img`
width:70px;
`
export const TopPopContainer = styled.div`
display:flex;
align-items:center;
`

export const CloseButton = styled.button`
align-self:flex-start;
border:none;
outline:none;
cursor:pointer;
background-color:transparent;
`

export const SuccessContainer = styled.div``