import {LearningACCAContainer,
  LearningACCAHeadingContainer,
  LearningACCAHeading,
  LearningACCALine,TopContainer,
  LevelList,EachLevel,LevelHeading,
  ExamPaper, ExamPaperProfessional,
  SubPaper,Paper,SubDivision,
  SubDivisionList,TotalPaper
   } from './styledComponents'

function LearningACCA() {
  return (
    <LearningACCAContainer>
        <LearningACCAHeadingContainer> 
      <LearningACCAHeading>What will you learn in ACCA?</LearningACCAHeading>
      <LearningACCALine />
      </LearningACCAHeadingContainer>
      <LevelList>
        <EachLevel>
          <TopContainer>
          <LevelHeading>Knowledge Level</LevelHeading>
          <ExamPaper>
            <Paper>Business and Technology (BT)</Paper>
            <Paper>Financial Accounting (FA)</Paper>
            <Paper>Management Accounting (MA)</Paper>
          </ExamPaper>
          </TopContainer>
          <TotalPaper>3 Paper</TotalPaper>
        </EachLevel>
        <EachLevel>
        <TopContainer>
          <LevelHeading>Skill Level</LevelHeading>
          <ExamPaper>
            <Paper>Corporate and Business Law (LW)</Paper>
            <Paper>Taxation (TX)</Paper>
            <Paper>Financial Reporting (FR)</Paper>
            <Paper>Performance Management (PM)</Paper>
            <Paper>Financial Management (FM)</Paper>
            <Paper>Audit and Assurance (AA)</Paper>
          </ExamPaper>
          </TopContainer>
          <TotalPaper>6 Paper</TotalPaper>
        </EachLevel>
        <EachLevel>
        <TopContainer>
          <LevelHeading>Professional Level</LevelHeading>       
          <ExamPaperProfessional>
          <SubDivision>Essentials
            <SubDivisionList>
            <SubPaper>
            Strategic Business Reporting (SBR)
            </SubPaper>
            <SubPaper>
            Strategic Business Leader (SBL)
            </SubPaper>
            </SubDivisionList>
            </SubDivision>
           
            <SubDivision>Options
            <SubDivisionList>
            
            <SubPaper>
            Advanced Financial Management (AFM)
            </SubPaper>
            <SubPaper>
            Advanced Audit and Assurance (AAA)
            </SubPaper>
            <SubPaper>
            Advanced Taxation (ATX)
            </SubPaper>
            <SubPaper>
            Advanced Performance Management (APM)
            </SubPaper>
            </SubDivisionList>
            </SubDivision>
          </ExamPaperProfessional>
            </TopContainer>
          <TotalPaper>4 Paper</TotalPaper>
        </EachLevel>
      </LevelList>
    </LearningACCAContainer>
  )
}

export default LearningACCA