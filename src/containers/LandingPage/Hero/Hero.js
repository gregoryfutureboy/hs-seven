import React from 'react';
import styled, { keyframes } from 'styled-components';

const rainbow = keyframes`
  0% {
    color: white;
  }

  6.67% {
    color: #B5B5FF;
  }

  13.34% {
    color: #8CC1F7;
  }

  20.01% {
    color: white;
  }

  26.68% {
    color: #8CC1F7;
  }  

  33.35% {
    color: #9BFDE8;
  }

  40.02% {
    color: white;
  }

  46.69% {
    color: #FCE88B;
  }

  53.36% {
    color: #FCC18B;
  }

  60.03% {
    color: white;
  }

  66.7% {
    color: #FF8E8C;
  }

  73.37% {
    color: #FFBDFC;
  }

  80.04% {
    color: white;
  }

  86.71% {
    color: #B5B5FF;
  }

  93.37% {
    color: #8CC1F7;
  }

  100% {
    color: white;
  }
`

const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  h1 {
    animation: ${rainbow} 42s linear infinite;
  }
  
  h3 {
    animation: ${rainbow} 42s linear infinite;
  }
`

const Hero = (props) => {
  return (
    <LandingContainer>
      <h1>
        {props.content.heroTitle}
      </h1>
      <h3>
        {props.content.heroSubtitle}
      </h3>
    </LandingContainer>
  );
};

export default Hero;