import { GiCeilingLight } from "react-icons/gi";
import { MdGroups2,MdAccessAlarm,MdOutlineComputer  } from "react-icons/md";
import { BiSolidRadio } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { RxCalendar } from "react-icons/rx";

import {WhyChooseUsContainer,WhyChooseUsHeadingContainer
  ,WhyChooseUsHeading,WhyChooseUsLine,
  ListPoints, Points, HeadingPoint, DescriptionPoint,
  DetailedList,ExtraPoints,ExtraPointsHeading, ExtraPointsContent, Content}  from './styledComponents' 

function WhyChooseUs() {
  return (
    <WhyChooseUsContainer>
      <WhyChooseUsHeadingContainer> 
      <WhyChooseUsHeading>Why Choose Us?</WhyChooseUsHeading>
      <WhyChooseUsLine />
      </WhyChooseUsHeadingContainer>
      <ListPoints>
        <Points>
            <GiCeilingLight fontSize={100} color="#2b0173"/>
          <HeadingPoint>Expert Faculty</HeadingPoint>
          <DescriptionPoint>Our faculty are well-trained professionals 
            play a pivotal role in guiding the academic journey of students, 
            offering more than just classroom instruction.             
            </DescriptionPoint>
        </Points>
        <Points>
            <MdGroups2 fontSize={100} color="#2b0173"/>
          <HeadingPoint>Complete Success Package</HeadingPoint>
          <DescriptionPoint> Elevate your potential with our comprehensive toolkit designed to 
            drive success in every area of your life. 
            Achieve your goals faster with expert guidance,
             proven strategies, and personalized support.            
            </DescriptionPoint>
        </Points>
        <Points>
            <BiSolidRadio fontSize={100} color="#2b0173"/>
          <HeadingPoint>Placement</HeadingPoint>
          <DescriptionPoint>Secure your dream job with our specialized placement services,
             including personalized resume crafting,
             targeted interview preparation, and strategic job search assistance.             
            </DescriptionPoint>
        </Points>
      </ListPoints>
      <DetailedList>
        <ExtraPoints>
          <ExtraPointsHeading>Level</ExtraPointsHeading>
          <ExtraPointsContent>
          <FaRegNewspaper />
            <Content>Three (13 Papers)</Content>
          </ExtraPointsContent>
        </ExtraPoints>
        <ExtraPoints>
          <ExtraPointsHeading>Duration</ExtraPointsHeading>
          <ExtraPointsContent>
          <MdAccessAlarm />
            <Content>6 - 10 months</Content>
          </ExtraPointsContent>
        </ExtraPoints>
        <ExtraPoints>
          <ExtraPointsHeading>Exam</ExtraPointsHeading>
          <ExtraPointsContent>
          <MdOutlineComputer /> 
            <Content>Quarterly (online)</Content>
          </ExtraPointsContent>
        </ExtraPoints>
        <ExtraPoints>
          <ExtraPointsHeading>Exemptions</ExtraPointsHeading>
          <ExtraPointsContent>
          <RxCalendar />
            <Content>Upto 9 papers</Content>
          </ExtraPointsContent>
        </ExtraPoints>
      </DetailedList>
    </WhyChooseUsContainer>
  )
}

export default WhyChooseUs