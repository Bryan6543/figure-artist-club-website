import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Coaching from "./pages/Coaching.jsx";
// import Community from "./pages/Community.jsx";
// import Membership from "./pages/Membership.jsx";
// import AboutUs from "./pages/AboutUs.jsx";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/coaching" element={<Coaching />} />
        <Route path="/community" element={<Community />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
    </>
  );
}

export default App;
