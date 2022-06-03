import { Navbar } from "./mycomps/Navbar";
import { Homepage } from "./mycomps/Homepage";
import { AppLink } from "./mycomps/AppLink";
import { AboutUs } from "./mycomps/AboutUs";
import { Footer } from "./mycomps/Footer";
import { CA } from "./mycomps/CA";
import { MA } from "./mycomps/MA";
import { CL } from "./mycomps/CL";
import { Public } from "./mycomps/Public";
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
          <Route path="public" element={<><Public /></>} />
          <Route path="admin" element={<><MA /></>} />
          <Route path="college" element={<><CA /></>} />
          <Route path="college-list" element={<><CL /></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
