import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Units() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Title>Units</Title>
      <TextContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextContainer>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/word.png" />
        </Wrap>
        <Wrap>
          <img src="/images/excel.png" />
        </Wrap>
        <Wrap>
          <img src="/images/ps.png" />
        </Wrap>
        <Wrap>
          <img src="/images/scratch.png" />
        </Wrap>
      </Carousel>
    </Container>
  );
}

export default Units;

const Container = styled.div`
  position: absolute;
  top: 200vh;
  min-height: 100vh;
  width: 100%;
  padding: 0 calc(7vw + 5px);
  overflow-x: hidden;
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
  padding: 40px 0;
  font-size: 18px;
  color: #f9f9f9;
  text-align: center;
  @media only screen and (max-width: 675px) {
    font-size: 16px;
  }
`;
const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;