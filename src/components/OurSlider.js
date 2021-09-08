import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ourSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <Container>
        </Container>
      <Wrapper>
        <Display>Display</Display>
      </Wrapper>
        </Slider>
      </div>
    )
  }
  
  export default ourSlider;
  
  const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;`
 
const Wrapper = styled.div ``

const Display = styled.div `
display: flex;
justify-content: center`

  