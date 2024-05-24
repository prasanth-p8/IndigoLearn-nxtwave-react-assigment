import Popup from 'reactjs-popup'
import { FaHospitalUser,FaChalkboardTeacher } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaBuildingShield } from "react-icons/fa6";
import { PiBookOpenTextLight } from "react-icons/pi";
import {MainContainer,ACCAMainContainer,RequestCallBack,ACCAHeading,ACCADescription,
        ACCAFacilities,FacilitiesList,FacilityTitle,FacilitiesHeading,FacilitiyCount,
        ACCAButtonContainer,ACCAButton,FormHeading,UserInput,SubmitButton, MainForm,
        PopContainer,CallBackSuccessText,OkayButton,SuccessImage,PopupMainContainer,
        TopPopContainer,CloseButton,SuccessContainer
} from './styledComponents'

function BecomeACCA() {
const userSubmitForm = event => {
  event.preventDefault()
}

  return (
    <MainContainer>
      <ACCAMainContainer>
        <ACCAHeading>Become ACCA in 18 months</ACCAHeading>
        <ACCADescription>Flexible way to become ACCA with expertise leading teacher of ACCA. 
          ACCA (Association of Chartered Certified Accountants) position in Top MNC's.
          Assured Placement in 18 months period of time. 
          </ACCADescription>
          <ACCAFacilities>
            <FacilitiesList>
              <FacilityTitle>
                  <FaHospitalUser />
                  <FacilitiesHeading>Register Students</FacilitiesHeading>
              </FacilityTitle>
              <FacilitiyCount>1,48,568</FacilitiyCount>
            </FacilitiesList>
            <FacilitiesList>
              <FacilityTitle>
              <FaBuildingShield />
                  <FacilitiesHeading>Course Offered</FacilitiesHeading>
              </FacilityTitle>
              <FacilitiyCount>61,485</FacilitiyCount>
            </FacilitiesList>
            <FacilitiesList>
              <FacilityTitle>
                <PiBookOpenTextLight />
                  <FacilitiesHeading>Learning Hours</FacilitiesHeading>
              </FacilityTitle>
              <FacilitiyCount>6,45,242</FacilitiyCount>
            </FacilitiesList>
            <FacilitiesList>
              <FacilityTitle>
              <FaChalkboardTeacher/>
                  <FacilitiesHeading>Faculty</FacilitiesHeading>
              </FacilityTitle>
              <FacilitiyCount>8 Expert</FacilitiyCount>
            </FacilitiesList>
          </ACCAFacilities>
          <ACCAButtonContainer>
            <ACCAButton>
              Download Brouchure
            </ACCAButton>
            <ACCAButton toknowmore>
                To Know More 
            </ACCAButton>
          </ACCAButtonContainer>
      </ACCAMainContainer>
      <RequestCallBack >
            <FormHeading>Aspiring to be an ACCA? Get in touch with us:</FormHeading>
            <MainForm onSubmit={userSubmitForm}>
            <UserInput placeholder='Name*' type='text'/>
            <UserInput placeholder='Email*' type='email'/>
            <UserInput placeholder='Number*' type='number'/>
            <Popup
     modal
     trigger={
      <SubmitButton type='submit'>Request Call Back</SubmitButton>
     }
   >
     {close => (
      <PopupMainContainer>
       <PopContainer>
        <TopPopContainer>
          <SuccessContainer>
        <SuccessImage src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/accept-icon.png' alt='success-popup'/>
          <CallBackSuccessText>Thanks for showing interesting in becoming ACCA.
          Our team will get in touch with you soon...
          </CallBackSuccessText>
          </SuccessContainer>
          <CloseButton onClick={() => close()}>
        <IoClose fontSize={30} color='#ffffff'/>
        </CloseButton>
        </TopPopContainer>
         <OkayButton
           onClick={() => close()}
         >
           Okay
         </OkayButton>
       </PopContainer>
       </PopupMainContainer>
     )}
   </Popup>
           
            </MainForm>
      </RequestCallBack>
    </MainContainer>
  )
}

export default BecomeACCA