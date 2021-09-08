import React from 'react'
import styled from 'styled-components';
import { Button } from 'antd';
import img from "./assets/dapi.png";
import img1 from "./assets/design.png";
import img2 from "./assets/design2.png";
import img3 from "./assets/design3.png";
import img4 from "./assets/design4.png";
import { Footer } from 'antd/lib/layout/layout';

export const Dapiok = () => {
    return (
      <Container>
          <Header>
              <Images><Image src={img}/></Images>
              <Link>
              <Text>Dapi</Text>
              <Text1>Changelog</Text1>
              <Text1>Pricing</Text1>
              <Text1>Contact</Text1>
              </Link>
              <Empty></Empty>
              <Login>Login</Login>
              <Sign><Sign1>Sign up</Sign1></Sign>
          </Header>
        <Texts>Design, Preview and Track 
            the API with the team</Texts>
        <Texts1>Dapi helps streamline API intergration 
            for the dev team. OpenAPI, sequence diagram,
            API document site and mock server. It aims for faster 
            integration and better tracking.</Texts1>
        <Try>Try FREE Now</Try>
        <BigImg><BigImg1 src={img1}/></BigImg>
        <Line>
            <Line1></Line1>
        </Line>
        <Texts>Design</Texts>
        <Texts1>More than just editing openAPI doc, you can define
            the model relationship,draw sequence diagram to understand better the logic
            bbehind each API
        </Texts1>
        <BigImg2><BigImg1 src={img2}/></BigImg2>
        <Line>
            <Line1></Line1>
        </Line>
        <Texts>Preview </Texts>
        <Texts1>Display a password protected API doc site and mock API server whenever you want.
            Let others in the team to do the integration and review before the API is ready.
        </Texts1>
        <BigImg2><BigImg1 src={img3}/></BigImg2>
        <Line>
            <Line1></Line1>
        </Line>
        <Texts>Track</Texts>
        <Texts1>Follow the updates and always keeping everybody aligned on
            on the lastest API. Review the API designing before the performance
            issue happens.
        </Texts1>
        <BigImg2><BigImg1 src={img4}/></BigImg2>
        <Texts>Ready to work on your API?</Texts>
        <Texts1>Dapi keeps everyone in the dev team aligned. Backend, Frontend
            and PM, collaborative working in one platform.
        </Texts1>
        <Try2>Try FREE Now</Try2>
        <Images1><Image src={img}/></Images1>
        <Footers>
            <Tes>Github</Tes>
            <Dot>.</Dot>
            <Tes>Twitter</Tes>
            <Dot>.</Dot>
            <Tes>Changelog</Tes>
            <Dot>.</Dot>
            <Tes>Pricing</Tes>
            <Dot>.</Dot>
            <Tes>Contact</Tes>
            <Dot>.</Dot>
            <Tes>Private Privacy</Tes>
        </Footers>
      </Container>
    )
}

export default Dapiok;

const Container = styled.div `
width: 100%;
background-color: #060606;
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.div `
width: 100%;
height: 13%;
display: flex;
flex-direction: row;
justify-content: center;
position: fixed;
backdrop-filter: blur(20px);
`

const Images = styled.div `
width: 8%;
height: 100%;
display: flex;
justify-content: center;
backdrop-filter: blur(20px);
align-items: center;`
const Images1 = styled.div `
width: 8%;
height: 100%;
margin-top: 220px;
display: flex;
justify-content: center;
align-items: center;`

const Image = styled.img `
width: 60%;
height: 60%;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(20px);
margin-left: 30%`

const Link = styled.div `
width: 23%;
height: 100%;
display: flex;
backdrop-filter: blur(20px);
align-items: center;
justify-content: space-between;
`

const Empty = styled.div `
width: 40%;
height: 100%;
display: flex;
justify-content: center;
backdrop-filter: blur(20px);
align-items: center`

const Login = styled.div `
width: 8%;
height: 100%;
color: blue;
font-weight: bold;
display: flex;
justify-content: center;
backdrop-filter: blur(20px);
align-items: center;
: hover{
    cursor: pointer;
    transition: all 350ms;
    text-decoration: underline;
}`

const Sign = styled.div `
width: 8%;
height: 100%;
display: flex;
justify-content: center;
backdrop-filter: blur(20px);
align-items: center`
const Sign1 = styled.div `
width: 90%;
height: 35%;
border-radius: 5px;
background-color: skyblue;
font-weight: bold;
color:white;
display: flex;
justify-content: center;
backdrop-filter: blur(20px);
cursor: pointer;
align-items: center
`

const Text = styled.div `
font-weight: bold;
: hover{
    cursor: pointer;
    transition: all 350ms;
    text-decoration: underline;
    color: red;
}`

const Text1 = styled.div `: hover{
    cursor: pointer;
    transition: all 350ms;
    text-decoration: underline;
    color: blue;
}`

const Texts = styled.div `
width: 60%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-clip: text;
-webkit-background-clip: text;
background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
-webkit-text-fill-color: transparent;
// background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
font-size: 70px;
font-weight: bold;
font-family: calibri;
margin-top: 100px`
const Texts1 = styled.div `
width: 52%;
height: 10%;
display: flex;
color: grey;
justify-content: center;
align-items: center;
text-align: center;
font-size: 20px;
font-family: calibri;
margin-top: 10px`

const Try = styled.div `
width: 20%;
height: 30px;
box-shadow: purple 0 0 20px;
display: flex;
font-weight: bold;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-top: 60px`
const Try2 = styled.div `
width: 20%;
height: 30px;
cursor: pointer;
background-color: rgb(65, 102, 204);
display: flex;
font-weight: bold;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-top: 40px`

const BigImg = styled.div `
width: 65%;
height: 600px;
margin-top: 70px;
display: flex;
box-shadow: lightblue 0 0 40px;
justify-content: center;
align-items: center;
border-radius: 20px;`
const BigImg2 = styled.div `
width: 60%;
height: 400px;
margin-top: 40px;
display: flex;
justify-content: center;
filter: blur(0px);
align-items: center;
border-radius: 20px;`

const BigImg1 = styled.img `
width: 100%;
height: 100%;
border-radius: 20px;`

const Line = styled.div `
width: 100%;
height: 100px;
margin-top: 70px;`
const Line1 = styled.div `
width: 50%;
height: 100%;
border-right: 1px solid white`

const Footers = styled.div `
width: 55%;
height: 70px;
display: flex;
flex-direction: row;`
const Tes = styled.div `
width: 20%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
: hover{
    cursor: pointer;
    transition: all 350ms;
    text-decoration: underline;
    color: blue;
}`
const Dot = styled.div `
width: 1%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;`