import Popup from 'reactjs-popup'
import { IoClose } from "react-icons/io5";
import { FaSquareXTwitter,FaSquareInstagram,FaLinkedin  } from "react-icons/fa6";
import { FaYoutubeSquare,FaGoogle  } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import {FooterContainer,KickStartContainer,
  KickStartHeading,KickStartContent,SignButton,RequestCallBack,
  FormHeading,UserInput,SubmitButton, MainForm,
        PopContainer,CallBackSuccessText,OkayButton,SuccessImage,PopupMainContainer,
        TopPopContainer,CloseButton,SuccessContainer,SocialMedia,SocialMediaIconList
        ,ContactUsText, Icons
} from './styledComponents'

function Footer() {
  const userSubmitForm = event => {
    event.preventDefault()
  }
  return (
    <>
    <FooterContainer>
      <KickStartContainer>
        <KickStartHeading>Kick off your ACCA 
          Prep journey with IndigoLearn
        </KickStartHeading>
        <KickStartContent>
          Sign-in and get instant access to our FREE Course
        </KickStartContent>
        <SignButton>Sign-In Button</SignButton>
      </KickStartContainer>
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
    </FooterContainer>
    <SocialMedia>
      <ContactUsText>Contact Us</ContactUsText>
      <SocialMediaIconList>
        <Icons>
        <FaGoogle  fontSize={30}/>
        </Icons>
        <Icons>
          <FaSquareXTwitter fontSize={30} />
        </Icons>
        <Icons>
          <FaSquareInstagram fontSize={30} />
        </Icons>
        <Icons>
          <FaYoutubeSquare fontSize={30}/>
        </Icons>
        <Icons>
          <FaLinkedin fontSize={30} />
        </Icons>
      </SocialMediaIconList>
    </SocialMedia>
    </>
  )
}

export default Footer