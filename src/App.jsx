import './App.css';
// import styled from "styled-components";
import Contact from "./compounts/contact";
import Hero from "./compounts/hero";
import Who from "./compounts/who";
import Works from "./compounts/work";

// const Container = styled.div`
//   height: 100vh;
//   background-color: rebeccapurple;
//   scroll-snap-type: y mandatory;
//   scroll-behavior: smooth;
//   overflow-y: auto;
//   scrollbar-width: none;
//   &::-webkit-scrollbar{
//     display: none;
//   }
 
// `;

function App() {
  return (
    <section classname="back" >
    <Hero />
    <Who />
    <Works />
    <Contact />
  </section>
  );
}

export default App;
