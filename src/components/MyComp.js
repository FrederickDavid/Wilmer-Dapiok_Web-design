import React from 'react'
import styled from 'styled-components';
import img from "./assets/10.png";
import img1 from "./assets/12.png";
import img2 from "./assets/9.png";
import img3 from "./assets/13.png";
import img4 from "./assets/14.png";
import img5 from "./assets/15.png";

export const MyComp = ({paragraph, title, img, change, clr}) => {
    return (
        <div>
            <Container change={change}>
                <Image src={img} />
                <Wrapper>
                    <Title clr={clr}>{title}</Title>
                    <p>{paragraph}</p>
                </Wrapper>
            </Container>
        </div>
    )
}


export default MyComp

const Container = styled.div `
padding-top: 40px;
width: 100%;
display: flex;
justify-content:space-around;
margin: 5px 0;
flex-direction: ${({change})=> change ? "row-reverse":"row"};
`
const Wrapper = styled.div `
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
`
const Image = styled.img `
width: 300px;
height: 200px;
background-color: white;
border-radius: 10px;
object-fit: cover;`

const Title = styled.h2 `
text-transform: uppercase;
color: ${({clr})=> clr ? "red":"white"}
`
