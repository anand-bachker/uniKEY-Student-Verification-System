import "./App.css";
import { AboutUs as BLAboutUs } from "./mycomps/AboutUs";
import { AppLink as BLAppLink } from "./mycomps/AppLink";
import { Footer as BLFooter } from "./mycomps/Footer";
import { Homepage as BLHomePage } from "./mycomps/Homepage";
import {Navbar as BLNavbar} from "./mycomps/Navbar";


import {Navbar as ALNavbar} from "./afterlogin/Navbar";





function App() {

  const isLoggined=true;

  return (
    <>
    <div className={`${isLoggined?"hidden":""}`}>

      <BLNavbar/>
      <BLHomePage/>
      <BLAppLink/>
      <BLAboutUs/>
      <BLFooter/>

    </div>

    <div className={`${isLoggined?"":"hidden"}`}>
      <ALNavbar/>

    </div>








    </>
  );
}

export default App;
