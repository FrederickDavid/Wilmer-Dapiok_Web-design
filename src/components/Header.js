import React from 'react'
import styled from 'styled-components';
import img from "./assets/11.png"

const Header = () => {
    return (
        <Container>
            <Image src={img}></Image>
            <Content>
                <Place>Overview</Place>
                <Place>Release Note</Place>
                <Place>Help</Place>
            </Content>
            <Places>GitHub Desktop</Places>
            <Text>Focus on what matters instead of fighting with Git.
                Whether you're new to Git or a seasoned user,
            </Text>
            <Text>GitHub Desktop 
                simplifies your development workflow.
            </Text>
            <Box>Download for Windows (64bit)</Box>
            <Smalltext>Download for macOs or Windows (msi)</Smalltext>
            <Smalltext1>by downloading you agree to 
                the Open Source Applications Terms.</Smalltext1>
        </Container>
    )
}

export default Header;

const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
padding-top: 50px;
`


const Content = styled.div `
display: flex;
margin-top: 10px`

const Image = styled.img `
width: 100px;
height: 100px;
border-radius: 100px;
background-color: white;
color: black;
display: flex;
justify-content: center;
align-items: center;
// border: 3px solid white;
object-fit: cover;
`

const Place = styled.div `
font-size: 11px;
margin: 10px;
text-transform: uppercase;
font-weight: bold;
transition: all 350ms;
transform: scale(1);
position: relative;

:after{
content: "";
position: absolute;
height: 1px;
background-color: white;
width: 100%;
bottom: -4px;
left: 0;
opacity: 0;
transform: scale(0);
transform-origin: center;
transition: all 350ms;
}

:hover{
    // text-decoration: underline;
    cursor: pointer;
    color: #812790;
    transform: scale(1);
    :after{
        opacity: 1;
        transform: scale(1.05);
    }
}`

const Places = styled.div `
margin-top: 30px;
font-size: 45px;
font-weight: lighter;`

const Text = styled.div `
font-size: 13px;
margin-top: 3px;
color: grey;`

const Box = styled.div `
width: 20%;
height: 40px;
background-color: #5C2D9E;
margin-top: 40px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: bold;
border: 1px solid black`

const Smalltext = styled.div `
font-size: 11px;
margin-top: 14px;
color: grey;`

const Smalltext1 = styled.div `
font-size: 11px;
margin-top: 2px;
color: grey;`
