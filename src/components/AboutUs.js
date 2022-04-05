import React from "react";
import styled from "styled-components";


function AboutUs() {
  return (
    <Container>
      <Title>ABOUT US</Title>
      
      <TextContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextContainer>
      <ImageContainer>
        <img src="https://live.staticflickr.com/65535/51983017766_39e9917468_z.jpg" />
      </ImageContainer>

    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  padding: 0 calc(7vw + 5px);
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #f9f9f9;
`;
const Title = styled.h1`
  width: 100%;
  font-size: 36px;
  text-align: center;
  color: #010a80;
  margin: 20px 0;
  @media only screen and (max-width: 675px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  font-size: 18px;
  text-align: center;
  @media only screen and (max-width: 675px) {
    font-size: 16px;
  }
`;
const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-width: 675px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
