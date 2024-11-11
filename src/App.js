import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Coke from "./Coke";
import Sprite from "./Sprite";
import Pretzel from "./Pretzel";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/coke" element={<Coke />} />
          <Route path="/sprite" element={<Sprite />} />
          <Route path="/pretzels" element={<Pretzel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
