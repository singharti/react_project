import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Carousel from './components/Carousel'
import Login from "./components/Login"
import Cakelist from './components/Cakelist';



var details = {
  projectname:"Sprinkles Bakery",
  home:"Home",
  about:"About",
  product:"Products",
  contact :"Contact Us"
}




function App(){

  return (
    <div>
       <Navbar details= {details}></Navbar>
      <Carousel></Carousel>
      <Login></Login>
      <Cakelist></Cakelist>
    </div>
  )
}
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
