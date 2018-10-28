import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.black};
  padding: 0 2rem;

  h1 {
    color: white;
  }

  h3 {
    color: white;
    text-align: center;
  }
`

const Hero = (props) => {
  return (
    <HeroContainer>
      <h1>{props.content.heroTitle}</h1>
      <h3>{props.content.heroSubtitle}</h3>
    </HeroContainer>
  );
};

export default Hero;