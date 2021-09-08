// import React,{useState, useEffect, useRef} from 'react';
// import "./myCSS.css";
// import img from "./Newfolder/1.png";
// import img1 from "./Newfolder/2.png";
// import img2 from "./Newfolder/3.png";
// import img3 from "./Newfolder/4.png";
// import img4 from "./Newfolder/5.png";
// import img5 from "./Newfolder/6.png";
// import img6 from "./Newfolder/7.png";
// import img7 from "./Newfolder/8.png";
// import img8 from "./Newfolder/9.png";
// import img9 from "./Newfolder/10.png";


// export const NewComp = () => {
//   const myRef = useRef()

//   const [me, setMe] = useState(null)
//   const [reads, setReads] = useState(null)
//   const [read, setRead] = useState(null)
//   const [computer, setComputer] = useState(0)


//   const genRand = (min, max) => {
//     const myVal = Math.floor(Math.random()*(max-min+1) + min);
//     setMe(myVal);
//     };

//     const getRand = (min, max) => {
//       const myData = Math.floor(Math.random() * (max - min + 1)) + min
//       setComputer(myData)
//     }
    
//   const genRand1 = (min, max) => {
//     const myVal = Math.floor(Math.random()*(max-min+1) + min);
//     setRead(myVal);
//     };
//   const genRand2 = (min, max) => {
//     const myVal = Math.floor(Math.random()*(max-min+1) + min);
//     setReads(myVal);
//     };
    
//     useEffect(() => {
//       myRef.current = me
//     }, [me])
//     useEffect(()=>{
//       setInterval(()=>{
//         getRand(0, 9)
//       }, 4000);
//     },[]);




//   useEffect(() => {
//     myRef.current = computer
//   }, [computer])

//   useEffect(() => {
//     setInterval(() => {
//       genRand(0, 9)
//     }, 4000)
//   }, []);

//   useEffect(() => {
//     myRef.current = reads
//   }, [reads])

//   useEffect(() => {
//     setInterval(() => {
//       genRand2(0, 9)
//     }, 4000)
//   }, []);






//   useEffect(() => {
//     myRef.current = read
//   }, [read])

//   useEffect(() => {
//     setInterval(() => {
//       genRand1(0, 5)
//     }, 4000)
//   }, []);



//   return (
//     <div className="Body">
//       <div className="Codelab">CodeLab</div>
//       <div className="Text">A Simple Game Build</div>
//       <div className="Box">
//       <div className="Box1">
//           <div className="Minibox">
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             me === 0 ? <img src={img} /> : 
//                             me === 1 ? <img src={img} /> : 
//                             me === 2 ? <img src={img1} /> : 
//                             me === 3 ? <img src={img2} /> : 
//                             me === 4 ? <img src={img3} /> : 
//                             me === 5 ? <img src={img4} /> : 
//                             me === 6 ? <img src={img5} /> : 
//                             me === 7 ? <img src={img6} /> : 
//                             me === 8 ? <img src={img7} /> :  
//                             me === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img} /> : 
//                             myRef.current === 2 ? <img src={img1} /> : 
//                             myRef.current === 3 ? <img src={img2} /> : 
//                             myRef.current === 4 ? <img src={img3} /> : 
//                             myRef.current === 5 ? <img src={img4} /> : 
//                             myRef.current === 6 ? <img src={img5} /> : 
//                             myRef.current === 7 ? <img src={img6} /> : 
//                             myRef.current === 8 ? <img src={img7} /> :  
//                             myRef.current === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img} /> : 
//                             myRef.current === 2 ? <img src={img1} /> : 
//                             myRef.current === 3 ? <img src={img2} /> : 
//                             myRef.current === 4 ? <img src={img3} /> : 
//                             myRef.current === 5 ? <img src={img4} /> : 
//                             myRef.current === 6 ? <img src={img5} /> : 
//                             myRef.current === 7 ? <img src={img6} /> : 
//                             myRef.current === 8 ? <img src={img7} /> :  
//                             myRef.current === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             read === 0 ? <img src={img} /> : 
//                             read === 1 ? <img src={img} /> : 
//                             read === 2 ? <img src={img1} /> : 
//                             read === 3 ? <img src={img2} /> : 
//                             read === 4 ? <img src={img3} /> : 
//                             read === 5 ? <img src={img4} /> : 
//                             read === 6 ? <img src={img5} /> : 
//                             read === 7 ? <img src={img6} /> : 
//                             read === 8 ? <img src={img7} /> :  
//                             read === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img} /> : 
//                             myRef.current === 2 ? <img src={img1} /> : 
//                             myRef.current === 3 ? <img src={img2} /> : 
//                             myRef.current === 4 ? <img src={img3} /> : 
//                             myRef.current === 5 ? <img src={img4} /> : 
//                             myRef.current === 6 ? <img src={img5} /> : 
//                             myRef.current === 7 ? <img src={img6} /> : 
//                             myRef.current === 8 ? <img src={img7} /> :  
//                             myRef.current === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             reads === 0 ? <img src={img} /> : 
//                             reads === 1 ? <img src={img} /> : 
//                             reads === 2 ? <img src={img1} /> : 
//                             reads === 3 ? <img src={img2} /> : 
//                             reads === 4 ? <img src={img3} /> : 
//                             reads === 5 ? <img src={img4} /> : 
//                             reads === 6 ? <img src={img5} /> : 
//                             reads === 7 ? <img src={img6} /> : 
//                             reads === 8 ? <img src={img7} /> :  
//                             reads === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img} /> : 
//                             myRef.current === 2 ? <img src={img1} /> : 
//                             myRef.current === 3 ? <img src={img2} /> : 
//                             myRef.current === 4 ? <img src={img3} /> : 
//                             myRef.current === 5 ? <img src={img4} /> : 
//                             myRef.current === 6 ? <img src={img5} /> : 
//                             myRef.current === 7 ? <img src={img6} /> : 
//                             myRef.current === 8 ? <img src={img7} /> :  
//                             myRef.current === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             me === 0 ? <img src={img} /> : 
//                             me === 1 ? <img src={img} /> : 
//                             me === 2 ? <img src={img1} /> : 
//                             me === 3 ? <img src={img2} /> : 
//                             me === 4 ? <img src={img3} /> : 
//                             me === 5 ? <img src={img4} /> : 
//                             me === 6 ? <img src={img5} /> : 
//                             me === 7 ? <img src={img6} /> : 
//                             me === 8 ? <img src={img7} /> :  
//                             me === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setMe(Math.floor(Math.random() * 9))}}>
//               {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img} /> : 
//                             myRef.current === 2 ? <img src={img1} /> : 
//                             myRef.current === 3 ? <img src={img2} /> : 
//                             myRef.current === 4 ? <img src={img3} /> : 
//                             myRef.current === 5 ? <img src={img4} /> : 
//                             myRef.current === 6 ? <img src={img5} /> : 
//                             myRef.current === 7 ? <img src={img6} /> : 
//                             myRef.current === 8 ? <img src={img7} /> :  
//                             myRef.current === 9 ? <img src={img8} /> :  null 
//                             }
//           </div>
//           <div className="Miniboxes"
//             onClick={() =>{setRead(Math.floor(Math.random() * 5))}}>
//               {
//                             read === 0 ? <img src={img} /> : 
//                             read === 1 ? <img src={img} /> : 
//                             read === 2 ? <img src={img1} /> : 
//                             read === 3 ? <img src={img2} /> : 
//                             read === 4 ? <img src={img3} /> : 
//                             read === 5 ? <img src={img4} /> :   null 
//                             }
//           </div>
       
//           </div>
//           <div className="Me">Me</div>
//         </div>
//         <div className="Box2">
//         <div className="Minibox">
//           <div className="Miniboxes">
//           {
//                             myRef.current === 0 ? <img src={img} /> : 
//                             myRef.current === 1 ? <img src={img1} /> : 
//                             myRef.current === 2 ? <img src={img2} /> : 
//                             myRef.current === 3 ? <img src={img3} /> : 
//                             myRef.current === 4 ? <img src={img4} /> : 
//                             myRef.current === 5 ? <img src={img5} /> : 
//                             myRef.current === 6 ? <img src={img6} /> : 
//                             myRef.current === 7 ? <img src={img7} /> :  
//                             myRef.current === 8 ? <img src={img8} /> : 
//                             myRef.current === 9 ? <img src={img9} /> : null 
//                             }
//           </div>
//         </div>
//           <div className="Computer">Computer</div>
//         </div>
//       </div>
//       <div className="Result">Result</div>
//       {/* <div className="Result">Me{me}||ComputerOutput{computer}</div> */}
//       <div className="Result"> {
//             me === computer ? <div>Wow... You're Right </div>
//              : 
//             me !== computer ? 
//             <div>hmm... You're Wrong </div>
//              : 
//              me === null ?  <div> Null </div> : null
//           }</div>
//     </div>
//   )
// }

// export default NewComp;
































// import React from 'react';
// import { AutoComplete } from 'antd';
// import Header from './Header';
// import MyComp from "./MyComp"
// import Footer from "./Footer"
// import styled from 'styled-components';
// import OurSlider from './OurSlider';
// import img from "./assets/10.png";
// import img1 from "./assets/12.png";
// import img2 from "./assets/9.png";
// // import img3 from "./assets/13.png";
// // import img4 from "./assets/14.png";
// // import img5 from "./assets/15.png";


// const NewComp = () => {
//   return (
//     <>
//     {/* <Container>
//       <OurSlider />
//       </Container> */}
//       <Container>
//       <Header />
//       <MyComp  
//       img={img}
//       paragraph="Attribute commits withcollaborators easily
// Quickly add co-authors to your commit. Great 
// for pairing and excellent for sending a little love/credit 
// to that special someone who helped fix that gnarly bug of yours. 
// See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com"
//       title="Hello from Title 1"/>
//       <MyComp 
//       clr
//       change 
//       img={img1}
//       paragraph="Attribute commits with collaborators easily
// Quickly add co-authors to your commit. Great for pairing and excellent for sending a
//  little love/credit to that special someone who helped fix that gnarly bug of yours. 
//  See the attribution on the history page, undo an accidental attribution, 
// and see the co-authors on github.com"
//       title="Hello from Title 2"/>
//       <MyComp  
//       img={img2}
//       paragraph="Attribute commits with collaborators easily
// Quickly add co-authors to your commit. Great for pairing and excellent 
// for sending a little love/credit to that special someone who helped fix 
// that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, 
// and see the co-authors on github.com"
//       title="Hello from Title 3"/>
//     <Footer />
//       </Container>

      
//     </>
//   )
// }

// export default NewComp;

// const Container = styled.div `
// width: 100%;
// height: 100vh;`






























// CSS 
// import React from 'react'
// import "./CompCss.css";



// const NewComp = () => {
//   return (
//     <div className="MainContainer">
//       <div className="CodeContainer">CODELAB</div>
//       <div>My First Game Build</div>
//       <div className="ContentHolder">
//         <div className="MeContainer">
//           <div className="Me">Card</div>
//           <div className="Me1">Me</div>
//           </div>
//         <div className="ComputerContainer">
//         <div className="Computer">Card</div>
//           <div>Computer</div>
//         </div>
//       </div>
//       <div>Result</div>
//     </div>
//   )
// }

// export default NewComp;

















// CSS 
// import React from 'react'
// import "./CompCss.css";



// const NewComp = () => {
//   return (
//     <div className="MainContainer">
//       <div className="CodeContainer">CODELAB</div>
//       <div>My First Game Build</div>
//       <div className="ContentHolder">
//         <div className="MeContainer">
//           <div className="Me">Card</div>
//           <div className="Me1">Me</div>
//           </div>
//         <div className="ComputerContainer">
//         <div className="Computer">Card</div>
//           <div>Computer</div>
//         </div>
//       </div>
//       <div>Result</div>
//     </div>
//   )
// }

// export default NewComp;





















// import React,{useState, useEffect, useRef} from "react";
// import "./myCSS.css";
// import img from "../components/0.png";
// import img1 from "../components/1.png";
// import img2 from "../components/2.png";
// import img3 from "../components/3.png";
// import img4 from "../components/4.png";
// import img5 from "../components/5.png";
// import trophy from "../components/trophy.png";

// const NewComp = () =>{

//   const myRef = useRef()

//   const [me, setMe] = useState(null)
//   const [computer, setComputer] = useState(0)

//   const getRand = (min, max) => {
//     const myData = Math.floor(Math.random() * (max - min + 1)) + min
//     setComputer(myData)
//   }

//   useEffect(() => {
//     myRef.current = computer
//   }, [computer])

//   useEffect(() => {
//     setInterval(() => {
//       getRand(0, 5)
//     }, 3000)
//   }, [])

//   return(
//     <div class="body">
//       <div class="body2">
//       <div class="codelab">Codelab</div>
//       <div class="text">A Simple Game Developed for Kids</div>
//       <div class="Main">
//         <div class="box1">
//           <div class="minibox"
//           onClick={() => {
//             setMe(0)
//           }}

//           > <img src={img} /> </div>
//           <div class="minibox"
//           onClick={() => {
//             setMe(1)
//           }}

//           ><img src={img1} /></div>
//           <div class="minibox"
//           onClick={() => {
//             setMe(2)
//           }}

//           > <img src={img2} /></div>
//           <div class="minibox"
//           onClick={() => {
//             setMe(3)
//           }}

//           ><img src={img3} /></div>
//           <div class="minibox"
//           onClick={() => {
//             setMe(4)
//           }}

//           ><img src={img4} /></div>
//           <div class="minibox"
//           onClick={() => {
//             setMe(5)
//           }}

//           ><img src={img5} /></div>
//         </div>
//         <div class="box2">
//         <div class="minibox">

//              {
//               myRef.current === 0 ? <img src={img} /> : 
//               myRef.current === 1 ? <img src={img1} /> : 
//               myRef.current === 2 ? <img src={img2} /> : 
//               myRef.current === 3 ? <img src={img3} /> : 
//               myRef.current === 4 ? <img src={img4} /> : 
//               myRef.current === 5 ? <img src={img5} /> : null 
//               }
//         </div>
//         </div>
//       </div>
//       <div class="components">
//         <div class="Me">Me</div>
//         <div class="Comp">Computer</div>
//       </div>
//       <div class="Result">RESULT</div>
//       {/* <div class="Computer">MyOutput: {me} || ComputerOutput: {computer}</div> */}
//       <div class="Computer">          {
//             me === computer ? <div>Wow... You're Right </div>
//              : 
//             me !== computer ? 
//             <div>hmm... You're Wrong </div>
//              : 
//              me === null ?  <div> Null </div> : null
//           }
//           <div class="Trophy">
//             {
//               me===computer?<img src={trophy}/> : null
//             }
//           </div>
// </div>
//     </div>
//       </div>

//   )
// }


// export default NewComp;



































// import React,{useState, useEffect}from "react";
// import "./myCSS.css";

// const NewComp =()=>{
// const [result, setResult] = useState(0)
// const genRand = (min, max) => {
// const myVal = Math.floor(Math.random()*(max-min+1) + min);
// setResult(myVal);
// };

// useEffect(()=>{
//   setInterval(()=>{
//     genRand(5, 10)
//   }, 3000);
// },[]);

//   return(
//     <div class="Main">
//       <div class="Head">Muomaife Frederick</div>
//       <div class="Head1">CodeLab</div>
//       <div class="Head2">My First Game Build</div>
//       <div class="Card">
//         <div class="First">
//         <div class="body">0</div>
//         <div class="body">1</div>
//         <div class="body">2</div>  
//         </div>
//         <div class="Second">
//         <div class="body">0</div>
//         </div>
//       </div>
//       <div class="Text2">
//         <div>Me</div>
//         <div>Computer</div>
//       </div>
//       <div class="Text">Result</div>
//       <div class="Text">{result}</div>
//     </div>
//   );
// };

// export default NewComp;














// import React, { useState, useEffect, Fragment } from "react";
// import "./myCSS.css";
// import img from "../components/1.png";
// import img1 from "../components/2.png";
// import img2 from "../components/4.png";
// import img3 from "../components/2.png";
// import img4 from "../components/3.png";
// import { BiCommentDetail } from "react-icons/bi";
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { Button, Input } from "antd";

// const NewComp = () => {
//   const [text, setText] = useState(" ");
//   const [showImage, setShowImage] = useState("");
//   const [myData, setMyData] = useState([
//     {
//       id: 1,
//       title: "I love simple codes",
//       icon: "NO",
//       time: "3sec ago",
//       image: img3,
//     },
//     {
//       id: 2,
//       title: "I love soft codes",
//       icon: "JS",
//       time: "6sec ago",
//       image: img1,
//     },
//     {
//       id: 3,
//       title: "I love my job",
//       icon: "RC",
//       time: "90sec ago",
//       image: img2,
//     },
//     {
//       id: 4,
//       title: "I love hard codes",
//       icon: "MN",
//       time: "65sec ago",
//       image: img4,
//     },
//   ]);

//   const [r, setR] = useState(24)

//   const loadImage = (e) => {
//     const file = e.target.files[0];
//     const readImage = URL.createObjectURL(file);
//     console.log(readImage);
//     setShowImage(readImage);
//   };

//   return (
//     <>
//       <div className="inputContainer">
//         <div className="inputLayOut">
//           <div className="input24">
//             <Input className="input" type="file" onChange={loadImage} />
//             <Input
//               className="input"
//               placeholder="Enter the Title"
//               value={text}
//               onChange={(e) => {
//                 setText(e.target.value);
//               }}
//             />
//             <Button className="inputButton" type="primary" danger>
//               Add
//             </Button>
//           </div>
//           <div className="inputImage">
//             <img
//               src={showImage}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "5px",
//                 objectFit: "cover",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mainContainer">
//         {myData.map((props) => (
//           <div className="container" key={props.id}>
//             <div className="containerIcon">{props.icon}</div>
//             <div className="containerTitle">{props.title}</div>
//             <div className="containerTime">{props.time}</div>
//             <div className="containerImage">
//               <img className="containerImage1" src={props.image} />
//             </div>
//             <div className="containerIcons">
//               <BiCommentDetail />
//               <BsFillBookmarkFill />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NewComp;
