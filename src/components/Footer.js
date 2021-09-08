import React from 'react'
import styled from 'styled-components';
import img3 from "./assets/13.png";
import img4 from "./assets/14.png";
import img5 from "./assets/15.png";


export const Footer = () => {
    return (
    <div>
        <Container>
           <Wrapper>
               <Titles>
                   <Image src={img3}/>
                   <Head>Expand image diff support</Head>
                   <Body>Easily compare changed images.See the
                       before and after, swipe or fade between the
                       two, or look at just the changed parts.
                   </Body>
               </Titles>
               <Titles>
                    <Image src={img4}/>
                   <Head>Extensive editor & shell intergrations</Head>
                   <Body>Open your favorite editor or shell from the
                       app, or jump back to GitHub Desktop is your 
                       springboard for work
                   </Body>
               </Titles>
               <Titles>
                    <Image src={img5}/>
                   <Head>Community supported</Head>
                   <Body>GitHub Desktop is open source now! Check
                       out our roadmap, contribute, and help us 
                       make collaboration even easier.
                   </Body>
               </Titles>
           </Wrapper>
       </Container>
    <Containers>
    <Button>See what's been built</Button>
    </Containers>
    </div>
    )
}

export default Footer;

const Container = styled.div `
padding-top: 40px;
width: 100%;
height: 50vh;
`
const Wrapper = styled.div `
width: 80%;
height: 90%;
display: flex;
justify-content: center;
align-items: center; 
margin: auto;
`

const Titles = styled.h2 `
width: 25%;
height: 70%;
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`


const Containers = styled.div `
width: 100%;
display: flex;
justify-content: center;
padding-top: 20px;
`

const Button = styled.div `
width: 12%;
height: 40px;
margin: 20px;
border: 2px solid white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
: hover{
    background-color: grey;
}
`
const Image = styled.img `
width: 20%;
height: 20%;
object-fit: cover;`

const Head = styled.div `
width: 100%;
height: 20%;
display: flex;
font-size: 16px;
justify-content: center;
align-items: center;`

const Body = styled.div `
width: 100%;
height: 50%;
display: flex;
font-size: 16px;
font-weight: normal;
text-align: center;
color: grey;
justify-content: center;
`

