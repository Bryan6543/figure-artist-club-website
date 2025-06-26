import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Coach from "./pages/Coach.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach" element={<Coach/>} />
      </Routes>
    </>
  );
}

export default App;
