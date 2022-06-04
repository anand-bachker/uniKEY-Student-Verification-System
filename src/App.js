import { Navbar } from "./mycomps/Navbar";
import { Homepage } from "./mycomps/Homepage";
import { AppLink } from "./mycomps/AppLink";
import { AboutUs } from "./mycomps/AboutUs";
import { Footer } from "./mycomps/Footer";
import { MA } from "./mycomps/MA";
import { RC } from "./mycomps/RC";
import { CA } from "./mycomps/CA";
import { RS } from "./mycomps/RS";
import { CL } from "./mycomps/CL";
import { Public } from "./mycomps/Public";
import { Lost } from "./mycomps/Lost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="select-none">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Homepage />
            <AppLink />
            <AboutUs /></>} />
          <Route exact path="admin/add-college" element={<><MA /></>} />
          <Route exact path="admin/remove-college" element={<><RC /></>} />
          <Route exact path="college/add-student" element={<><CA /></>} />
          <Route exact path="college/remove-student" element={<><RS /></>} />
          <Route exact path="college-list" element={<><CL /></>} />
          <Route exact path="public" element={<><Public /></>} />
          <Route path="*" element={<><Lost /></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
