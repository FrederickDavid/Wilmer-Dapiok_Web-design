import React from "react";
import styled from "styled-components";

const Todaysclass = () => {
    return (
       <Container>
           <Input>
           <input placeholder="Avatar"/>
           </Input>
           <Input>
           <input placeholder="Name"/>
           </Input>
           <Input>
           <input placeholder="Quote"/>
           </Input>
           <Wrapper>
               <Topbox>
                <Top>
               <Delete>X</Delete>
                </Top>
               <Images>
               <Image />
               </Images>
               </Topbox>
               
               
               <Name>Name</Name>
               <Quote>Qoute</Quote>
               <Time>Time</Time>

           </Wrapper>
       </Container>
    )
}

export default Todaysclass;

const Topbox = styled.div `
width: 100%;
height: 50%;
border-bottom: 1px solid white;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Top = styled.div `
width: 100%;
height: 15%;
margin-top: 3px;`
const Delete = styled.div `
width: 30px;
height: 30px;
border-radius: 50px;
margin-left: 90%;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
`
const Images = styled.div `
width: 100%;
height: 80%;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.div `
width: 55%;
height: 100%;
background-color: white;
border-radius: 50%;`

const Name = styled.div `
width: 100%;
height: 15%;`
const Quote = styled.div `
width: 100%;
height: 20%;`
const Time = styled.div `
width: 100%;
height: 15%;`


const Container = styled.div `
background-color: #22272e;
width: 100%;
height: 100vh;
min-height: 100vh;
color: white;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 20px;`

const Wrapper = styled.div `
width: 25%;
height: 65%;
display: flex;
justify-content: space-around;
border: 1px solid white;
margin-top: 20px;
border-radius: 10px;
flex-direction: column;`

const Input = styled.div ``
