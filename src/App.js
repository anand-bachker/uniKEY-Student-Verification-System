import "./App.css";
import { AboutUs } from "./mycomps/AboutUs";
import { Description } from "./mycomps/Description";
import { Footer } from "./mycomps/Footer";
import { Homepage } from "./mycomps/Homepage";
import {Navbar} from "./mycomps/Navbar";
// import {DescriptionContent} from "./mycomps/DescriptionContent";

function App() {
  return (
    <div className="select-none">
    <Navbar/>
    <Homepage/>
    {/* <DescriptionContent/> */}
    <Description/>
    <AboutUs/>
    <Footer/>
    </div>
  );
}

export default App;
