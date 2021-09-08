import React from "react";
// import NewComp from "./components/NewComp";
import Dapiok from "./routerStudy/Dapiok";
// import Todaysclass from "./routerStudy/Todaysclass";
// import HeaderNav from "./components/RouterStudy/HeaderNav";

const App = () => {
  return(
    <div>
      {/* <HeaderNav /> */}
      {/* <NewComp /> */}
      {/* <Todaysclass /> */}
      <Dapiok />
    </div>
  )
}

  


export default App;









// const [counter, setCounter] = useState(0)
//   const [text, setText] = useState("");
//   const [myQuote, setMyQuote] = useState([
//     "Colin said that, his name means People's victory",
//     "Miracle's best quote is, Life is Beautiful",
//     "Mr Joe best Quote is, I am a success",
//     "Mr Confident is saying that, He is Coding!",
//   ])

//   const addCounter = ()=>{
//     setCounter(counter + 1)
//   }

//   const minusCounter = () =>{
//     if (counter <= 0) {
//       setCounter(myQuote.length);
//        } else {
//         setCounter(counter - 1);}
//   }

//   return(
//   <div style={{
//     width:"100%",
//     height:"100vh",
//     backgroundColor:"red",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//     flexDirection:"column",

//   }}>
//     <div style={{
//     width:"100%",
//     height:"100vh",
//     backgroundColor:"red",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//     }}>
//     <div>Add</div>
//     </div>
    

//     <div style={{
//     width:"100%",
//     height:"100vh",
//     backgroundColor:"red",
//     display:"flex",
//     justifyContent:"space-around",
//     alignItems:"center",
//     }}> 

//   <button 
//   onClick={minusCounter}>Minus</button>
//   <div>{myQuote[counter % myQuote.length]}</div>
//   <button 
//   onClick={addCounter}>Add</button>
//   </div>
//   </div>

//   );
// };
