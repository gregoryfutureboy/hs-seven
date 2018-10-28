import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled, { css, keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }

  100$ {
    opacity: 1;
  }
`

const disappear = keyframes`
  0% {
    opacity: 1;
  }

  100$ {
    opacity: 0;
  }
`

const KmtSectionContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.black};
`

const KmtWhiteSquare = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};

  @media (min-width: 1101px) {
    height: 800px;
    width: 800px;
  }

  @media (max-width: 1100px) {
    height: 600px;
    width: 600px;
  }

  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
  }

  @media (max-width: 414px) {
    height: 250px;
    width: 250px;
  }    

  @media (max-width: 375px) {
    height: 200px;
    width: 200px;
  }  
`

const KmtImg = styled.img`
  height: 80%; 
  animation: ${appear} 2.2s;
`

const Hovered = styled.div`
  font-family: 'futura';
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.black};
  animation: ${appear} 1.2s linear;
  color: ${props => props.theme.white};
  letter-spacing: 1rem;
  @media (min-width: 1101px) {
    font-size: 3rem;
  }

  @media (max-width: 1100px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 414px) {
    font-size: 2rem;
  }    

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`

class KmtSection extends Component {

  state = {
    mouseEntered: false,
  }

  mouseEnter = () => {
    this.setState({
      mouseEntered: true
    })
  }

  mouseLeave = () => {
    this.setState({
      mouseEntered: false
    })
  }

  render(){
    return(
      <KmtSectionContainer>
        <KmtWhiteSquare href='https://vsco.co/light-world/journal/queens-of-kemet' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          {
            this.state.mouseEntered ? <KmtImg src={this.props.content.sectionImage.fields.file.url} /> : <Hovered>K M . T</Hovered>
          }
          
        </KmtWhiteSquare>
      </KmtSectionContainer>
    )
  }
}

export default KmtSection;