import { StyledSection, Header, Title, SectionContainer } from "./styled";

const Section =({title, body,extraHeaderContent }) => (
    <StyledSection>
    <Header >
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <SectionContainer>
      {body}
    </SectionContainer>
  </StyledSection>
)

export default Section;