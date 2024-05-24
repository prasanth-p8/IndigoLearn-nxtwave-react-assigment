import {PlacementContainer,PlacementHeadingContainer,
  PlacementHeading,PlacementContainerLine
,PlacementList,PlacementFeatures,PlacementFeaturesTitle,
PlacementFeaturesContent} from './styledComponents'


const Placements = () =>(
    <PlacementContainer>
      <PlacementHeadingContainer> 
      <PlacementHeading>100% Placement Assistance</PlacementHeading>
      <PlacementContainerLine />
      </PlacementHeadingContainer>
      <PlacementList>
        <PlacementFeatures>
          <PlacementFeaturesTitle>Resume Building</PlacementFeaturesTitle>
          <PlacementFeaturesContent> Create a standout resume with our expert guidance, tailored 
            to highlight your unique strengths and achievements.</PlacementFeaturesContent>
        </PlacementFeatures>
        <PlacementFeatures>
          <PlacementFeaturesTitle>Career Counselling</PlacementFeaturesTitle>
          <PlacementFeaturesContent> Unlock your true potential with personalized career guidance, expert advice, 
            and strategic planning to achieve your professional goals.</PlacementFeaturesContent>
        </PlacementFeatures>
        <PlacementFeatures>
          <PlacementFeaturesTitle>Jobs</PlacementFeaturesTitle>
          <PlacementFeaturesContent> Discover a variety of job opportunities 
            tailored to your skills and career aspirations.</PlacementFeaturesContent>
        </PlacementFeatures>
      </PlacementList>
    </PlacementContainer>
)


export default Placements