import "./App.css";
import { AboutUs } from "./mycomps/AboutUs";
import { Description } from "./mycomps/Description";
import { Footer } from "./mycomps/Footer";
import { Homepage } from "./mycomps/Homepage";
import {Navbar} from "./mycomps/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <Description/>
    <AboutUs/>
    <Footer/>


    </>
  );
}

export default App;
